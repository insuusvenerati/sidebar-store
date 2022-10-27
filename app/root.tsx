import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import tailwind from "./tailwind.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Store with Sidebar",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Varela+Round",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta name="generator" content="Big Cartel" />
        <meta name="author" content="↟CAMP MUSTELID↟"></meta>
        <meta
          name="description"
          content="we're a small team of two artists who love nature! @nepeteaa and @melmorrel you can visit our website here: campmustelid.com"
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:site_name" content="↟CAMP MUSTELID↟"></meta>
        <meta property="og:title" content="↟CAMP MUSTELID↟"></meta>
        <meta property="og:url" content="https://www.campmustelid.shop/"></meta>
        <meta
          property="og:description"
          content="we're a small team of two artists who love nature! @nepeteaa and @melmorrel you can visit our website here: campmustelid.com"
        ></meta>
        <meta
          property="og:image"
          content="https://assets.bigcartel.com/account_images/3478508/IMG_4380.PNG?auto=format&amp;fit=max&amp;h=1200&amp;w=1200"
        ></meta>
        <meta
          property="og:image:secure_url"
          content="https://assets.bigcartel.com/account_images/3478508/IMG_4380.PNG?auto=format&amp;fit=max&amp;h=1200&amp;w=1200"
        ></meta>
        <Meta />
        <Links />
      </head>
      <body className="bg-orange-50 text-green-900 h-full min-h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
