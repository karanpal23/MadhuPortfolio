<#
  personalise.ps1 - replace every placeholder across the site in one pass.

  Run from the portfolio folder. Every parameter is optional: pass only the
  ones you have, and run it again later for the rest.

    powershell -ExecutionPolicy Bypass -File .\tools\personalise.ps1 `
        -Domain       "madhusalaria.dev" `
        -Mobile       "61452394161" `
        -LinkedIn     "madhu-salaria" `
        -GitHub       "madhusalaria" `
        -Calendly     "madhusalaria/30min" `
        -Web3Forms    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" `
        -Availability "Taking 2 new projects - Sep 2026"

  Add -WhatIf to preview without writing. Files are edited in place, and a
  .bak copy of each is kept from the first run.

  NOTE: this file is deliberately pure ASCII. Windows PowerShell 5.1 reads a
  BOM-less UTF-8 script as ANSI, which corrupts non-ASCII literals.
#>
[CmdletBinding(SupportsShouldProcess = $true)]
param(
  [string] $Domain,        # bare domain, no protocol:  madhusalaria.dev
  [string] $Mobile,        # country code + number, digits only: 61452394161
  [string] $MobileDisplay, # optional explicit display form: "+61 452 394 161"
  [string] $LinkedIn,      # handle only:  madhu-salaria
  [string] $GitHub,        # handle only:  madhusalaria
  [string] $Calendly,      # handle/event: madhusalaria/30min
  [string] $Web3Forms,     # access key from web3forms.com
  [string] $Email,         # only if moving off the gmail address
  [string] $Availability   # hero badge text, e.g. "Taking 2 new projects - Sep 2026"
)

$ErrorActionPreference = 'Stop'
$root  = Split-Path $PSScriptRoot -Parent
$files = @(
  'index.html'
  '404.html'
  'robots.txt'
  'sitemap.xml'
  'assets\capability-sheet.html'
) | ForEach-Object { Join-Path $root $_ } | Where-Object { Test-Path $_ }

# ---- rules, applied in order -----------------------------------------
# each rule: @{ label; pattern; replace; regex = $true|$false }
$rules = New-Object System.Collections.Generic.List[object]
function Rule($label, $pattern, $replace, $isRegex = $false) {
  $rules.Add(@{ label = $label; pattern = $pattern; replace = $replace; regex = $isRegex })
}

if ($Domain) {
  $d = $Domain -replace '^https?://', '' -replace '/$', ''
  Rule 'domain' 'YOURDOMAIN.com' $d
}

if ($Mobile) {
  $digits = $Mobile -replace '[^\d]', ''
  Rule 'mobile link' '61452394161' $digits
  if ($MobileDisplay) {
    $disp = $MobileDisplay
  } elseif ($digits.Length -eq 11) {
    # AU mobile: 61 4xx xxx xxx
    $disp = '+{0} {1} {2} {3}' -f $digits.Substring(0,2), $digits.Substring(2,3), $digits.Substring(5,3), $digits.Substring(8)
  } elseif ($digits.Length -eq 12) {
    # IN mobile: 91 xxxxx xxxxx
    $disp = '+{0} {1} {2}' -f $digits.Substring(0,2), $digits.Substring(2,5), $digits.Substring(7)
  } else {
    $disp = "+$digits"   # pass -MobileDisplay to control the grouping
  }
  Rule 'mobile display' '+61 452 394 161' $disp
}

if ($LinkedIn) {
  $h = $LinkedIn -replace '^.*linkedin\.com/in/', '' -replace '/$', ''
  Rule 'linkedin url'     "linkedin.com/in/YOUR-HANDLE" "linkedin.com/in/$h"
  Rule 'linkedin display' "/in/YOUR-HANDLE"             "/in/$h"
}

if ($Calendly) {
  $h = $Calendly -replace '^.*calendly\.com/', '' -replace '/$', ''
  Rule 'calendly' 'calendly.com/YOUR-HANDLE/30min' "calendly.com/$h"
}

if ($GitHub) {
  $h = $GitHub -replace '^.*github\.com/', '' -replace '/$', ''
  Rule 'github url' 'github.com/YOUR-HANDLE' "github.com/$h"
  # whatever bare /YOUR-HANDLE is left is the GitHub display span. The
  # lookbehind keeps it off LinkedIn's /in/YOUR-HANDLE when -LinkedIn
  # was not supplied in this run.
  Rule 'github display' '(?<!/in)/YOUR-HANDLE' "/$h" $true
}

if ($Web3Forms) { Rule 'web3forms key' 'YOUR_WEB3FORMS_ACCESS_KEY'  $Web3Forms }
if ($Email)     { Rule 'email'         'madhusalaria1996@gmail.com' $Email }

if ($Availability) {
  # match the badge by structure, not by its current text, so this keeps
  # working after the first change. Group 1 is the dot span + whitespace.
  $pat = '(<span class="avail"><span class="dot" aria-hidden="true"></span>\s*)(.*?)(</span>)'
  $esc = $Availability -replace '\$', '$$$$'
  Rule 'availability badge' $pat "`${1}$esc`${3}" $true
}

if ($rules.Count -eq 0) {
  Write-Host "Nothing to do - pass at least one parameter. See the header of this file." -ForegroundColor Yellow
  exit 0
}

# ---- apply ------------------------------------------------------------
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$totalHits = 0
$wrote     = $false

foreach ($file in $files) {
  $orig = [System.IO.File]::ReadAllText($file)
  $text = $orig
  $hits = New-Object System.Collections.Generic.List[string]

  foreach ($r in $rules) {
    if ($r.regex) {
      $n = ([regex]::Matches($text, $r.pattern)).Count
      if ($n -gt 0) { $text = [regex]::Replace($text, $r.pattern, $r.replace) }
    } else {
      $n = ([regex]::Matches($text, [regex]::Escape($r.pattern))).Count
      if ($n -gt 0) { $text = $text.Replace($r.pattern, $r.replace) }
    }
    if ($n -gt 0) {
      $hits.Add(("    {0,-20} x{1}" -f $r.label, $n))
      $totalHits += $n
    }
  }

  if ($text -ne $orig) {
    $name = Split-Path $file -Leaf
    if ($PSCmdlet.ShouldProcess($name, "replace $($hits.Count) placeholder kind(s)")) {
      $bak = "$file.bak"
      if (-not (Test-Path $bak)) { Copy-Item $file $bak }
      [System.IO.File]::WriteAllText($file, $text, $utf8NoBom)
      $wrote = $true
    }
    Write-Host $name -ForegroundColor Green
    $hits | ForEach-Object { Write-Host $_ }
  }
}

Write-Host ""
Write-Host "$totalHits replacement(s) made." -ForegroundColor Cyan

# ---- what is still outstanding ---------------------------------------
if (-not $wrote) {
  Write-Host "(preview only - nothing written)" -ForegroundColor DarkGray
  return
}

$left = New-Object System.Collections.Generic.List[string]
foreach ($file in $files) {
  $t = [System.IO.File]::ReadAllText($file)
  foreach ($p in 'YOUR-HANDLE', 'YOUR_WEB3FORMS_ACCESS_KEY') {
    if ($t.Contains($p)) { $left.Add("$(Split-Path $file -Leaf): $p") }
  }
}

if ($left.Count -gt 0) {
  Write-Host "`nStill unreplaced:" -ForegroundColor Yellow
  $left | Sort-Object -Unique | ForEach-Object { Write-Host "    $_" }
} else {
  Write-Host "`nNo placeholders left." -ForegroundColor Green
}
Write-Host "By hand: swap the three 'Worked example' cards in index.html for real case records as you land projects (README section 1)." -ForegroundColor Yellow
