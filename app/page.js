"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the PPM Tool</h1>
      <p className="mb-6 text-lg text-gray-600">
        Your central place for portfolio management
      </p>
      <L (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/app/page.js b/app/page.js
index 39d6cb40dfcd8105701ecb5d77213b4b1649dee0..789ac99bb3842749abb5517e59be7153d30304b2 100644
--- a/app/page.js
+++ b/app/page.js
@@ -1,19 +1,20 @@
 "use client";
 
 import Link from "next/link";
 
 export default function HomePage() {
   return (
     <main className="flex flex-col items-center justify-center h-screen text-center">
       <h1 className="text-4xl font-bold mb-4">Welcome to the PPM Tool</h1>
       <p className="mb-6 text-lg text-gray-600">
         Your central place for portfolio management
       </p>
-      <Link href="/dashboard">
-        <a className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
-          Go to Dashboard
-        </a>
+      <Link
+        href="/dashboard"
+        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
+      >
+        Go to Dashboard
       </Link>
     </main>
   );
 }
\ No newline at end of file
 
EOF
)
    </main>
  );
}
