Add-Type -AssemblyName System.Drawing

$W = 1200; $H = 630
$bmp = New-Object System.Drawing.Bitmap($W, $H)
$g   = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

function C([string]$hex) { [System.Drawing.ColorTranslator]::FromHtml($hex) }

$paper = C '#0E1615'
$ink   = C '#DEE6E4'
$muted = C '#8FA29F'
$stamp = C '#E3775A'
$teal  = C '#5CC8BB'
$rule  = [System.Drawing.Color]::FromArgb(48, 222, 230, 228)

$g.Clear($paper)

$mono   = 'Consolas'
$serif  = 'Georgia'
$fLabel = New-Object System.Drawing.Font($mono,  15, [System.Drawing.FontStyle]::Bold)
$fName  = New-Object System.Drawing.Font($serif, 82, [System.Drawing.FontStyle]::Bold)
$fLine1 = New-Object System.Drawing.Font($mono,  33, [System.Drawing.FontStyle]::Bold)
$fLine2 = New-Object System.Drawing.Font($serif, 33, [System.Drawing.FontStyle]::Italic)
$fFoot  = New-Object System.Drawing.Font($mono,  15, [System.Drawing.FontStyle]::Regular)

$bInk   = New-Object System.Drawing.SolidBrush($ink)
$bMuted = New-Object System.Drawing.SolidBrush($muted)
$bStamp = New-Object System.Drawing.SolidBrush($stamp)
$bTeal  = New-Object System.Drawing.SolidBrush($teal)
$pRule  = New-Object System.Drawing.Pen($rule, 1)

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
Track 'SOFTWARE DELIVERY' $fLabel $bTeal ($M + 28) $topY 2.2

$claim = 'FIXED SCOPE / WEEKLY DEMOS / FULL HANDOVER'
$cw    = TrackWidth $claim $fFoot 1.1
Track $claim $fFoot $bMuted ($W - $M - 28 - $cw) ($topY + 2) 1.1

# ---- name -----------------------------------------------------------
$nameY = 200
$g.DrawString('Madhu Salaria', $fName, $bInk, ($M + 20), $nameY)
$g.FillRectangle($bStamp, ($M + 28), ($nameY + 138), 96, 3)

# ---- the offer ------------------------------------------------------
$g.DrawString('Spring Boot & Angular', $fLine1, $bStamp, ($M + 24), 392)
$g.DrawString('application delivery',  $fLine2, $bInk,   ($M + 26), 452)

# ---- bottom rail ----------------------------------------------------
$footY = $H - $M - 52
$g.DrawLine($pRule, ($M + 28), $footY, ($W - $M - 28), $footY)

Track '10+ YEARS / JAVA / SPRING BOOT / ANGULAR / REACT / NODE / AWS' `
      $fFoot $bMuted ($M + 28) ($footY + 18) 1.1

# corner marks, echoing the favicon
$g.FillRectangle($bStamp, ($W - $M - 28 - 34), ($footY + 22), 13, 13)
$g.FillRectangle($bTeal,  ($W - $M - 28 - 13), ($footY + 22), 13, 13)

$out = 'C:\Users\karan\dev\portfolio\assets\og.png'
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bmp.Dispose()
"WROTE: $out  ($([math]::Round((Get-Item $out).Length/1KB,1)) KB)"
