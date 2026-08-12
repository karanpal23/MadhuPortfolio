Add-Type -AssemblyName System.Drawing

$W = 1200; $H = 630
$bmp = New-Object System.Drawing.Bitmap($W, $H)
$g   = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

function C([string]$hex) { [System.Drawing.ColorTranslator]::FromHtml($hex) }

# Stackforge Studio palette — navy + cyan
$navy  = C '#0B1F3A'
$deep  = C '#081831'
$ink   = C '#E6EDF7'
$muted = C '#94A3B8'
$brand = C '#00C2CB'
$rule  = [System.Drawing.Color]::FromArgb(60, 230, 237, 247)

# Vertical gradient background (navy top -> deeper bottom)
$rect = New-Object System.Drawing.Rectangle(0, 0, $W, $H)
$bg   = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $navy, $deep, 90)
$g.FillRectangle($bg, $rect)

# Cyan glow in the upper-right (radial-ish accent)
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddEllipse(700, -220, 900, 900)
$glow = New-Object System.Drawing.Drawing2D.PathGradientBrush($path)
$glow.CenterColor = [System.Drawing.Color]::FromArgb(45, 0, 194, 203)
$glow.SurroundColors = @([System.Drawing.Color]::FromArgb(0, 0, 194, 203))
$g.FillPath($glow, $path)

$sans   = 'Segoe UI'
$mono   = 'Consolas'
$fLabel = New-Object System.Drawing.Font($mono, 15, [System.Drawing.FontStyle]::Bold)
$fBrand = New-Object System.Drawing.Font($sans, 42, [System.Drawing.FontStyle]::Bold)
$fName  = New-Object System.Drawing.Font($sans, 72, [System.Drawing.FontStyle]::Bold)
$fLine  = New-Object System.Drawing.Font($sans, 32, [System.Drawing.FontStyle]::Regular)
$fFoot  = New-Object System.Drawing.Font($mono, 15, [System.Drawing.FontStyle]::Regular)

$bInk    = New-Object System.Drawing.SolidBrush($ink)
$bMuted  = New-Object System.Drawing.SolidBrush($muted)
$bBrand  = New-Object System.Drawing.SolidBrush($brand)
$bNavy   = New-Object System.Drawing.SolidBrush($navy)
$pRule   = New-Object System.Drawing.Pen($rule, 1)
$pBrand  = New-Object System.Drawing.Pen($brand, 3)

$tf = [System.Drawing.StringFormat]::GenericTypographic

# GenericTypographic reports ~0 width for a lone space, which silently
# collapses spaces in tracked text. Derive the real advance by difference.
function SpaceWidth($font) {
  $a = $g.MeasureString('A A', $font, 1000, $tf).Width
  $b = $g.MeasureString('AA',  $font, 1000, $tf).Width
  return ($a - $b)
}

function TrackWidth($text, $font, $sp) {
  $sw = SpaceWidth $font
  $tot = 0.0
  foreach ($ch in $text.ToCharArray()) {
    if ($ch -eq ' ') { $tot += $sw }
    else { $tot += $g.MeasureString([string]$ch, $font, 1000, $tf).Width }
    $tot += $sp
  }
  return ($tot - $sp)
}

function Track($text, $font, $brush, $x, $y, $sp) {
  $sw = SpaceWidth $font
  $cx = [float]$x
  foreach ($ch in $text.ToCharArray()) {
    if ($ch -eq ' ') { $cx += $sw + $sp; continue }
    $s = [string]$ch
    $g.DrawString($s, $font, $brush, $cx, [float]$y)
    $cx += $g.MeasureString($s, $font, 1000, $tf).Width + $sp
  }
}

$M = 64

# ---- frame ----------------------------------------------------------
$g.DrawRectangle($pRule, $M, $M, $W - 2*$M, $H - 2*$M)

# ---- top rail -------------------------------------------------------
$topY = $M + 26
Track 'ENTERPRISE SOFTWARE DELIVERY' $fLabel $bBrand ($M + 28) $topY 2.2

$claim = 'FIXED SCOPE / WEEKLY DEMOS / FULL HANDOVER'
$cw    = TrackWidth $claim $fFoot 1.1
Track $claim $fFoot $bMuted ($W - $M - 28 - $cw) ($topY + 2) 1.1

# ---- brand mark + name ---------------------------------------------
$markX = $M + 24
$markY = 170
$markW = 60
# rounded-square-ish mark, cyan on ink
$g.FillRectangle($bBrand, $markX, $markY, $markW, $markW)
$fMark  = New-Object System.Drawing.Font($sans, 40, [System.Drawing.FontStyle]::Bold)
$g.DrawString('S', $fMark, $bNavy, ($markX + 12), ($markY + 2))

# wordmark
$g.DrawString('Stackforge', $fName, $bInk, ($markX + 80), 148)
$g.DrawString('STUDIO',     $fBrand, $bBrand, ($markX + 80), 244)

# accent underline
$g.FillRectangle($bBrand, ($M + 28), 328, 96, 3)

# ---- the offer ------------------------------------------------------
$g.DrawString('Spring Boot & Angular application delivery,',  $fLine, $bInk, ($M + 26), 372)
$g.DrawString('shipped and handed over.',                     $fLine, $bMuted, ($M + 26), 418)

# ---- bottom rail ----------------------------------------------------
$footY = $H - $M - 52
$g.DrawLine($pRule, ($M + 28), $footY, ($W - $M - 28), $footY)

Track '10+ YEARS / JAVA / SPRING BOOT / ANGULAR / REACT / NODE / AWS' `
      $fFoot $bMuted ($M + 28) ($footY + 18) 1.1

# corner brand marks
$g.FillRectangle($bBrand, ($W - $M - 28 - 34), ($footY + 22), 13, 13)
$g.FillRectangle((New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(120, 0, 194, 203))),
                 ($W - $M - 28 - 13), ($footY + 22), 13, 13)

$out = 'C:\Users\karan\dev\portfolio\assets\og.png'
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bmp.Dispose()
"WROTE: $out  ($([math]::Round((Get-Item $out).Length/1KB,1)) KB)"
