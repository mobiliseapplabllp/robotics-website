#!/bin/bash
# scripts/download-keenon-images.sh
#
# Downloads official KEENON product images (hero + gallery) to public/images/products/{id}/
# Run from the repo root: bash scripts/download-keenon-images.sh
#
# Idempotent: skips files that already exist. Use the FORCE=1 env var to re-download.

set -u  # fail on unbound vars (we intentionally don't use -e so one 404 doesn't abort the run)
BASE="public/images/products"
FORCE="${FORCE:-0}"

ok=0
skipped=0
failed=0

download() {
  local url="$1"
  local out="$2"
  mkdir -p "$(dirname "$out")"
  if [ "$FORCE" != "1" ] && [ -f "$out" ] && [ -s "$out" ]; then
    skipped=$((skipped + 1))
    return 0
  fi
  if curl -L -sS -f -o "$out" --max-time 60 "$url"; then
    ok=$((ok + 1))
    echo "✓ $out"
  else
    failed=$((failed + 1))
    echo "✗ FAILED: $out  ($url)"
    rm -f "$out" 2>/dev/null
  fi
}

# ── T3 ─────────────────────────────────────────────────────────
download "https://static.keenon.com/uploads/2025/01/07/0a4ae5b928164780870b214d28ce872e.jpg?x-oss-process=image/format,webp" "$BASE/t3/hero.webp"
download "https://static.keenon.com/uploads/2025/01/07/2f6e0938cdf14d17ae050fdee9d9b42c.webp" "$BASE/t3/gallery-1.webp"
download "https://static.keenon.com/uploads/2025/01/07/358ebe3c25fc43d69f1af28d94207c7c.webp" "$BASE/t3/gallery-2.webp"
download "https://static.keenon.com/uploads/2025/01/07/595a110067584434ade63645c15c5a2f.webp" "$BASE/t3/gallery-3.webp"
download "https://static.keenon.com/uploads/2025/01/07/7ac6ce60c4df4412ba7404e6329a9559.webp" "$BASE/t3/gallery-4.webp"

# ── T5 ─────────────────────────────────────────────────────────
# KEENON no longer hosts a dedicated T5 page. Reusing T8 imagery as a visually
# similar tray-delivery placeholder until we source dedicated T5 photography.
download "https://static.keenon.com/uploads/2025/01/07/70b4d698984f428ca5d4238f03cbe183.jpg?x-oss-process=image/format,webp" "$BASE/t5/hero.webp"
download "https://static.keenon.com/uploads/2025/01/07/3f1030d1ed7f419e8d1fe25536af2051.webp" "$BASE/t5/gallery-1.webp"
download "https://static.keenon.com/uploads/2025/01/07/94462ee9a41147c6904e129834c0b2d0.webp" "$BASE/t5/gallery-2.webp"

# ── T8 ─────────────────────────────────────────────────────────
download "https://static.keenon.com/uploads/2025/01/07/70b4d698984f428ca5d4238f03cbe183.jpg?x-oss-process=image/format,webp" "$BASE/t8/hero.webp"
download "https://static.keenon.com/uploads/2025/01/07/3f1030d1ed7f419e8d1fe25536af2051.webp" "$BASE/t8/gallery-1.webp"
download "https://static.keenon.com/uploads/2025/01/07/94462ee9a41147c6904e129834c0b2d0.webp" "$BASE/t8/gallery-2.webp"
download "https://static.keenon.com/uploads/2025/01/07/1018d077ce544f988cd61efc5ba67d6b.webp" "$BASE/t8/gallery-3.webp"
download "https://static.keenon.com/uploads/2025/01/07/a5250f4cb30446b2912151e2c96f0598.webp" "$BASE/t8/gallery-4.webp"

# ── T9 ─────────────────────────────────────────────────────────
download "https://static.keenon.com/uploads/2025/01/07/b46b83afb7cc4912a9e4bcad83ae4c6d.jpg?x-oss-process=image/format,webp" "$BASE/t9/hero.webp"
download "https://static.keenon.com/uploads/2025/01/07/2dc8bf76f6c24bd8abf5db546d36571e.webp" "$BASE/t9/gallery-1.webp"
download "https://static.keenon.com/uploads/2025/01/07/50dc2c8bf72140afb617ddb0383f7c47.webp" "$BASE/t9/gallery-2.webp"
download "https://static.keenon.com/uploads/2025/01/07/a1f3fade22cc485284696ba418f8dbe9.webp" "$BASE/t9/gallery-3.webp"
download "https://static.keenon.com/uploads/2025/01/07/b924622435a94162bcacef7af337553c.webp" "$BASE/t9/gallery-4.webp"

# ── T9 Pro ─────────────────────────────────────────────────────
download "https://static.keenon.com/uploads/2025/01/07/5b5be29c47bb403fa173285a3deba3d7.jpg?x-oss-process=image/format,webp" "$BASE/t9-pro/hero.webp"
download "https://static.keenon.com/uploads/2025/01/07/2e1806fa93a4413da0364159c2a7f611.webp" "$BASE/t9-pro/gallery-1.webp"
download "https://static.keenon.com/uploads/2025/01/07/04d5e139552b4ed389abeeb9b0b31262.webp" "$BASE/t9-pro/gallery-2.webp"
download "https://static.keenon.com/uploads/2025/01/07/4126f74e8b744c18bf0d88b6ee59256e.webp" "$BASE/t9-pro/gallery-3.webp"
download "https://static.keenon.com/uploads/2025/01/07/d982bb8065be4bfc92c33ea9247b6b79.webp" "$BASE/t9-pro/gallery-4.webp"

# ── T10 ────────────────────────────────────────────────────────
download "https://static.keenon.com/uploads/2025/01/07/29ecca741b734c61b7a345e384ad6f2a.jpg?x-oss-process=image/format,webp" "$BASE/t10/hero.webp"
download "https://static.keenon.com/uploads/2025/01/07/4dd7ee05dfa64deebe34cf14b5f2f755.jpg?x-oss-process=image/format,webp" "$BASE/t10/gallery-1.webp"
download "https://static.keenon.com/uploads/2025/01/07/36b2596faacd47cabb9a10f041d4186c.webp" "$BASE/t10/gallery-2.webp"
download "https://static.keenon.com/uploads/2025/03/17/0e55bb5ce2d34973821c534d912ebd96.jpg?x-oss-process=image/format,webp" "$BASE/t10/gallery-3.webp"
download "https://static.keenon.com/uploads/2025/03/17/e7528c3637714e85b36d5fa830ee0939.jpg?x-oss-process=image/format,webp" "$BASE/t10/gallery-4.webp"

# ── T11 ────────────────────────────────────────────────────────
# hero already local — these update the feature gallery with the most recent KEENON photos
download "https://static.keenon.com/uploads/2025/09/01/aef7c671bab445fdbd46cea9cd50a781.png?x-oss-process=image/format,webp" "$BASE/t11/hero.webp"
download "https://static.keenon.com/uploads/2025/08/27/15eba5c9e4b54040a2048fd7dea74722.jpg?x-oss-process=image/format,webp" "$BASE/t11/t11_feature_1.webp"
download "https://static.keenon.com/uploads/2025/08/27/225f3bdaa69441529a0787643b8f7ebd.jpg?x-oss-process=image/format,webp" "$BASE/t11/t11_feature_2.webp"
download "https://static.keenon.com/uploads/2025/08/27/bff71a3e19bc43f6ba5f7ee9055555f1.jpg?x-oss-process=image/format,webp" "$BASE/t11/t11_feature_3.webp"
download "https://static.keenon.com/uploads/2025/08/27/e5d5ba0f417346fbb0cbbdb038746f8a.jpg?x-oss-process=image/format,webp" "$BASE/t11/t11_feature_4.webp"

# ── W3 ─────────────────────────────────────────────────────────
download "https://static.keenon.com/uploads/2025/01/07/66c020578366481596e71cfedc10aa25.jpg?x-oss-process=image/format,webp" "$BASE/w3/hero.webp"
download "https://static.keenon.com/uploads/2025/01/07/a8179615751d47d587d41b6301deb648.webp" "$BASE/w3/gallery-1.webp"
download "https://static.keenon.com/uploads/2025/01/07/561c13c146c54835b161f3f7f681ab16.webp" "$BASE/w3/gallery-2.webp"
download "https://static.keenon.com/uploads/2025/01/07/ed59fd54ff2f4a45a53f62519bdaf4aa.webp" "$BASE/w3/gallery-3.webp"
download "https://static.keenon.com/uploads/2025/01/07/355e41ea5c2e413fb8d276f3ec323881.png?x-oss-process=image/format,webp" "$BASE/w3/gallery-4.webp"

# ── C20 ────────────────────────────────────────────────────────
# existing /c20 dir has industry images — adding hero + product gallery
download "https://static.keenon.com/uploads/2025/04/10/bffedda3ed8a49fb9d48db0731dafa3b.png?x-oss-process=image/format,webp" "$BASE/c20/hero.webp"
download "https://static.keenon.com/uploads/2025/05/30/249ddd79696847a39faff2155e7b15b9.jpg?x-oss-process=image/format,webp" "$BASE/c20/gallery-1.webp"
download "https://static.keenon.com/uploads/2025/05/30/3c032df429624ffa92ac6637b5dabe04.jpg?x-oss-process=image/format,webp" "$BASE/c20/gallery-2.webp"
download "https://static.keenon.com/uploads/2025/05/30/6c9b261c52044095a31aa1f23f545b4a.jpg?x-oss-process=image/format,webp" "$BASE/c20/gallery-3.webp"
download "https://static.keenon.com/uploads/2025/05/30/8de4f733546a4716a6aff684744638e3.jpg?x-oss-process=image/format,webp" "$BASE/c20/gallery-4.webp"

# ── C30 ────────────────────────────────────────────────────────
download "https://static.keenon.com/uploads/2025/01/07/5bc901fd4a6a4f8d925eee15d5282b28.jpg?x-oss-process=image/format,webp" "$BASE/c30/hero.webp"
download "https://static.keenon.com/uploads/2025/01/07/de67edd2fbee407aaadd617ded3e9fdf.jpg?x-oss-process=image/format,webp" "$BASE/c30/gallery-1.webp"
download "https://static.keenon.com/uploads/2025/01/07/95bd1d65f9ef48a0b7ec180d59c9696a.webp" "$BASE/c30/gallery-2.webp"
download "https://static.keenon.com/uploads/2025/01/07/ce88f13512e94b33b450d5eb5d3585f4.webp" "$BASE/c30/gallery-3.webp"
download "https://static.keenon.com/uploads/2025/01/07/9137ed1569104c14ba2821eaf1b11678.jpg?x-oss-process=image/format,webp" "$BASE/c30/gallery-4.webp"

# ── C40 ────────────────────────────────────────────────────────
# already has 11 local feature files; just ensure hero is canonical
download "https://static.keenon.com/uploads/2025/03/29/57c63343437f4cc9a4513d0ec12adec1.png?x-oss-process=image/format,webp" "$BASE/c40/hero.webp"

# ── C55 ────────────────────────────────────────────────────────
download "https://static.keenon.com/uploads/2025/11/06/a3d819df7793438f972564c14317a30a.jpg?x-oss-process=image/format,webp" "$BASE/c55/hero.webp"
download "https://static.keenon.com/uploads/2025/11/06/f48c34667e804421b3adad48fd4a5554.jpg?x-oss-process=image/format,webp" "$BASE/c55/gallery-1.webp"
download "https://static.keenon.com/uploads/2025/11/06/81b0e062e21641709871839ebd0e51f5.jpg?x-oss-process=image/format,webp" "$BASE/c55/gallery-2.webp"
download "https://static.keenon.com/uploads/2025/11/06/c59144d457384c979a929e1ebd75ed66.jpg?x-oss-process=image/format,webp" "$BASE/c55/gallery-3.webp"
download "https://static.keenon.com/uploads/2025/11/06/422a0edc9e1045c5912471a09c70e343.jpg?x-oss-process=image/format,webp" "$BASE/c55/gallery-4.webp"

# ── G1 ─────────────────────────────────────────────────────────
# KEENON has deprecated G1 — current guiding robot is G2 (Peanut series).
# We reuse S100 hero imagery as a visually similar service-robot placeholder;
# consider rebranding to G2 or dropping from catalog in a future pass.
download "https://static.keenon.com/uploads/2025/01/07/da5945d838104e25a86b225b448ac7f9.jpg?x-oss-process=image/format,webp" "$BASE/g1/hero.webp"
download "https://static.keenon.com/uploads/2025/02/10/23658280543b4d7d9302e689b6981ce5.png?x-oss-process=image/format,webp" "$BASE/g1/gallery-1.webp"
download "https://static.keenon.com/uploads/2025/02/10/13ec3c5471fc426da62aa2b187f9d8b0.png?x-oss-process=image/format,webp" "$BASE/g1/gallery-2.webp"

# ── S100 ───────────────────────────────────────────────────────
download "https://static.keenon.com/uploads/2025/01/07/da5945d838104e25a86b225b448ac7f9.jpg?x-oss-process=image/format,webp" "$BASE/s100/hero.webp"
download "https://static.keenon.com/uploads/2025/02/10/23658280543b4d7d9302e689b6981ce5.png?x-oss-process=image/format,webp" "$BASE/s100/gallery-1.webp"
download "https://static.keenon.com/uploads/2025/02/10/13ec3c5471fc426da62aa2b187f9d8b0.png?x-oss-process=image/format,webp" "$BASE/s100/gallery-2.webp"
download "https://static.keenon.com/uploads/2025/02/10/f05a9c18115b40b7abe2efa0ed2500b0.png?x-oss-process=image/format,webp" "$BASE/s100/gallery-3.webp"
download "https://static.keenon.com/uploads/2025/02/10/63fb6bd56821412bb8f63899c8ce492f.png?x-oss-process=image/format,webp" "$BASE/s100/gallery-4.webp"

# ── S300 ───────────────────────────────────────────────────────
download "https://static.keenon.com/uploads/2025/10/10/6c16f280020b4a258e0a1235ee5da218.jpg?x-oss-process=image/format,webp" "$BASE/s300/hero.webp"
download "https://static.keenon.com/uploads/2025/10/10/646128197b974c6badd6e5fbae0aa822.jpg?x-oss-process=image/format,webp" "$BASE/s300/gallery-1.webp"
download "https://static.keenon.com/uploads/2025/10/10/afee143ed7e340768a026d42c25a81b2.jpg?x-oss-process=image/format,webp" "$BASE/s300/gallery-2.webp"
download "https://static.keenon.com/uploads/2025/10/10/22bd98fcf806487093402753e3fd5b86.png?x-oss-process=image/format,webp" "$BASE/s300/gallery-3.webp"
download "https://static.keenon.com/uploads/2025/10/10/2430719c6a0d487da7969197faabdfbd.jpg?x-oss-process=image/format,webp" "$BASE/s300/gallery-4.webp"

echo ""
echo "───────────────────────────────────"
echo "Downloaded:  $ok"
echo "Skipped (cached): $skipped"
echo "Failed:      $failed"
echo "───────────────────────────────────"

if [ "$failed" -gt 0 ]; then
  exit 1
fi
