export default function Index() {
  return (
    <div className="h-full min-h-full relative">
      <aside className="float-left h-full absolute w-60 pt-14 pr-7 pl-7 bg-transparent">
        <div className="min-h-0 -mb-24">
          <header className="mb-9 overflow-hidden w-36">
            <a href="/" title="↟CAMP MUSTELID↟" className="logo  image ">
              <img
                src="https://assets.bigcartel.com/theme_images/65520267/Untitled_Artwork+9.png?auto=format&amp;fit=max&amp;w=300}}"
                alt="↟CAMP MUSTELID↟ Home"
                width="150"
              />
            </a>
          </header>
          <nav className="text-base">
            <section className="border-t-orange-300 border-t-2 p-3">
              <div className="text-green-900 font-bold">Cart</div>
            </section>
            <section className="border-t-orange-300 border-t-2 p-3">
              <div className="text-green-900 font-bold">Products</div>
              <form
                action="/products"
                method="get"
                className="text-green-900 cursor-pointer h-6 pt-1 pr-0 pb-2 pl-0 relative"
                acceptCharset="utf8"
              >
                <input type="hidden" name="utf8" value="✓" />
                <label htmlFor="search">Search…</label>
                <input type="text" name="search" id="search" />
              </form>
              <ul>
                <li>
                  <a href="/category/camp-mustelid" className="text-green-900">
                    CAMP MUSTELID
                  </a>
                </li>

                <li>
                  <a href="/category/apparel" className="text-green-900">
                    apparel
                  </a>
                </li>

                <li>
                  <a href="/category/accessories" className="text-green-900">
                    accessories
                  </a>
                </li>

                <li>
                  <a href="/category/plush" className="text-green-900">
                    plush
                  </a>
                </li>

                <li>
                  <a href="/category/patches" className="text-green-900">
                    patches
                  </a>
                </li>

                <li>
                  <a href="/category/stickers" className="text-green-900">
                    stickers
                  </a>
                </li>

                <li>
                  <a href="/category/keychains" className="text-green-900">
                    keychains
                  </a>
                </li>

                <li>
                  <a href="/category/prints-stationary" className="text-green-900">
                    prints &amp; stationary
                  </a>
                </li>

                <li>
                  <a href="/category/buttons-badges" className="text-green-900">
                    buttons &amp; badges
                  </a>
                </li>

                <li>
                  <a href="/category/preorders" className="text-green-900">
                    PREORDERS
                  </a>
                </li>

                <li>
                  <a href="/category/digital" className="text-green-900">
                    digital
                  </a>
                </li>
              </ul>
            </section>
            <section className="border-t-orange-300 border-t-2 p-3">
              <ul>
                <li className="text-green-900 font-bold">
                  <a href="/about" className="">
                    ABOUT
                  </a>
                </li>

                <li className="text-green-900 font-bold">
                  <a href="/tos-shipping" className="">
                    TOS &amp; FAQ
                  </a>
                </li>

                <li className="text-green-900 font-bold">
                  <a href="/contact" className="">
                    Contact
                  </a>
                </li>
              </ul>
            </section>
            <section className="border-t-orange-300 border-t-2 p-3">
              <ul>
                <li className="text-green-900 font-bold">
                  <a
                    target="_blank"
                    title="Instagram"
                    href="https://www.instagram.com/nepeteaa/"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>

                <li className="text-green-900 font-bold">
                  <a
                    target="_blank"
                    title="Twitter"
                    href="https://twitter.com/CampMustelid"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>

                <li className="text-green-900 font-bold">
                  <a
                    target="_blank"
                    title="Tumblr"
                    href="https://nepeteaa.tumblr.com/"
                    rel="noreferrer"
                  >
                    Tumblr
                  </a>
                </li>

                <li className="text-green-900 font-bold">
                  <a href="http://campmustelid.com">Back to Site</a>
                </li>
              </ul>
            </section>
          </nav>
        </div>
        <footer></footer>
      </aside>
      <main className="pt-16 pr-0 pb-0 pl-0 w-full">
        <div className="mt-0 mr-8 mb-0 ml-64 pt-14 pb-14 w-auto" style={{ minWidth: 500 }}>
          <ul className="products_list grid">
            <li className="product">
              <a href="/product/autumnal-quilt-hoodie-preorder">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/4d016b78-671f-485a-ac78-695a74197922/autumnal-quilt-hoodie-preorder.png?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">autumnal quilt hoodie *PREORDER*</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>65.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/autumnal-quilt-crewneck-preorder">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/71931827-0dbe-4ab6-b1ab-01c498f62de8/autumnal-quilt-crewneck-preorder.png?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">autumnal quilt crewneck *PREORDER* (CM)</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>60.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/tamarack-hoodie-preorder">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/9d2961e6-ea01-4078-be5b-39f252ada151/tamarack-hoodie-preorder.png?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">tamarack hoodie *PREORDER*</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>65.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/tits-boobies-shirt">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/346717423/IMG_2731.PNG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">tits &amp; boobies shirt (CM)</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>35.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/sea-otter-beanie">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/ee004397-10ff-466d-8bef-10941f17ab34/sea-otter-beanie.png?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">sea otter beanie (CM)</div>
                  <div className="price sold-out">
                    <span className="currency_sign">$</span>30.00 / Sold Out
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/river-otter-beanie">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/cab2f48b-0fe0-40ca-a5fc-1481800abc41/river-otter-beanie.png?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">river otter beanie (CM)</div>
                  <div className="price sold-out">
                    <span className="currency_sign">$</span>30.00 / Sold Out
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/bleach-dye-forest-tee-brown">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/2ad0e6f4-28a0-421a-89d8-70479c5ce703/bleach-dye-forest-tee-brown.png?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">bleach dye forest tee (brown) (CM)</div>
                  <div className="price sold-out">
                    <span className="currency_sign">$</span>40.00 / Sold Out
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/bleach-dye-forest-tee-black">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/2d0890cf-f5c3-4a71-825f-29cc404c8c14/bleach-dye-forest-tee-black.png?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">bleach dye forest tee (black)</div>
                  <div className="price sold-out">
                    <span className="currency_sign">$</span>40.00 / Sold Out
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/european-marten-plush-cm">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/346662883/IMG_2720.PNG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">european marten plush (CM)</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>40.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/ermine-plush-cm">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/346662775/IMG_2718.PNG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">ermine plush (CM)</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>35.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/stoat-plush">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/346310737/IMG_2673.PNG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">stoat plush (CM)</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>35.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/american-marten-plushie">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/ecd05fab-9fa9-4c6a-a795-d3c86eeec294/american-marten-plushie.png?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">american marten plush (CM)</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>40.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/salmon-standard-knit-hat">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/294350094/IMG_9599.jpg?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">salmon *standard* knit hat (CM)</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>25.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/fish-want-me-hat-cm-1">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/320799426/IMG_3094.jpeg?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">fish want me hat (CM)</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>25.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/autumn-fox-embroidered-keychain">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/6ab0074b-acf6-4785-96aa-c40f131733e3/autumn-fox-embroidered-keychain.jpg?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">autumn fox embroidered keychain</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>12.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/mushroom-sticker-collecting-book">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/957de9a6-c74b-4bb7-be07-eadff8e44d59/mushroom-sticker-collecting-book.jpg?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">many mushrooms sticker-collecting book</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>15.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/camping-sticker-collecting-book">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/1ad7584f-6547-4167-8216-db3b78aad0ed/camping-sticker-collecting-book.jpg?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">camp treasures sticker-collecting book</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>15.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/brake-for-birds-bumper-sticker">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/f9e07f3b-3903-403d-a826-ec3fb5c8eca9/brake-for-birds-bumper-sticker.jpg?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">“I brake for birds” bumper sticker</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>8.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/mushroom-bandana">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/266ca695-428c-42f8-8963-392d058187b6/mushroom-bandana.png?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">many mushrooms bandana </div>
                  <div className="price active">
                    <span className="currency_sign">$</span>20.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/foresty-five-panel-cm">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/328207647/IMG_2160.JPG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">foresty five panel (CM)</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>25.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/pride-birds-wood-duck-drakes">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/fe156e04-4969-414e-91cd-63a5653b5828/pride-birds-wood-duck-drakes.jpg?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">pride birds - wood duck drakes</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>4.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/pride-birds-wood-duck-hens">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/5dc6141f-b309-46cb-b9c1-d9d9736bbfeb/pride-birds-wood-duck-hens.jpg?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">pride birds - wood duck hens</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>4.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/woodland-marten-sticker">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/9541c182-cf2e-44fb-af57-7803fb5b2cba/woodland-marten-sticker.jpg?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">climbing marten sticker </div>
                  <div className="price active">
                    <span className="currency_sign">$</span>4.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/shiny-ptarmigan-sticker">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/82ff9a49-61e5-4100-85e4-d20b8428ded5/shiny-ptarmigan-sticker.jpg?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">shiny ptarmigan sticker</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>4.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/otter-lanyard">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/a2c9f025-eca1-4948-9bd7-a577befbc0da/otter-lanyard.jpg?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">river otter lanyard</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>10.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/barn-owl-keychain">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/345551023/IMG_1106.JPG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">barn owl keychain</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>12.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/orinoco-goose-sticker">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/7713c246-ebbb-4511-b3bb-0c1a33e887cc/orinoco-goose-sticker.jpg?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">orinoco goose sticker</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>4.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/feather-lanyard">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/26db2c5a-72bc-4472-b1d1-0059fb538fcb/feather-lanyard.jpg?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">feather lanyard</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>10.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/peregrine-falcon-sticker">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/d90f915b-a740-46fd-9546-b8a7be04c475/peregrine-falcon-sticker.jpg?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">peregrine falcon sticker</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>4.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/quail-sticker">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/cdeda0d6-4941-4662-8995-a159b1e285fb/quail-sticker.jpg?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">california quail sticker</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>4.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/log-marten-keychain">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/345551938/IMG_1110.JPG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">climbing marten keychain</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>12.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/chickadee-titmouse-sticker">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/341740372/IMG_8987.JPG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">chickadee &amp; titmouse sticker</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>5.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/blue-footed-booby-keychain">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/341741977/IMG_8981.JPG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">blue footed booby keychain</div>
                  <div className="price sold-out">
                    <span className="currency_sign">$</span>12.00 / Sold Out
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/i-love-boobies-bumper-sticker">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/341737606/IMG_2448.PNG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">i love boobies bumper sticker</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>9.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/blue-footed-booby-sticker">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/341742649/IMG_8974.JPG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">blue footed booby sticker</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>4.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/tattoo-ticket">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/342126244/IMG_9203.PNG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">tattoo ticket</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>25.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/pine-forest-fanny-pack-cm">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/335616522/Untitled_Artwork+5+copy.png?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">pine fanny pack (CM)</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>40.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/forest-fanny-pack-cm">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/335615682/Untitled_Artwork+1+copy.png?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">forest fanny pack (CM)</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>40.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/otter-bucket-hat-cm">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/339199023/IMG_7409.JPG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">otter bucket hat (CM)</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>25.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/otter-baseball-cap-cm">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/339197352/IMG_2277.PNG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">otter baseball cap (CM)</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>25.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/wolverine-corduroy-cap">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/328207857/IMG_2164.JPG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">wolverine corduroy cap</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>30.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/pheasant-shirt-cm">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/282748351/A5A475AA-92E4-4598-ACDB-3D2311DBBA5C.jpeg?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">pheasant shirt (CM)</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>35.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/taxonomy-shirt-cm">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/310706967/IMG_6306.jpg?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">Taxonomy Shirt (CM)</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>35.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/friends-of-the-forest-sticker-sheet">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/339126246/IMG_7345.JPG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">friends of the forest sticker sheet</div>
                  <div className="price sold-out">
                    <span className="currency_sign">$</span>8.00 / Sold Out
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/camp-mustelid-sticker-sheet">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/339125823/IMG_7344.JPG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">camp mustelid sticker sheet</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>7.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/weasel-washi-tape">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/320933466/IMG_2096.JPG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">weasel washi tape</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>8.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/sea-otter-keychain">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/335594205/IMG_2295+copy.JPG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">sea otter keychain</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>12.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/tamarack-lanyard">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/328203930/IMG_2181.JPG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">tamarack lanyard</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>10.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/mushroom-button-up">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/335489769/IMG_1973.PNG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">mushroom button up</div>
                  <div className="price active">
                    <span className="currency_sign">$</span>50.00
                  </div>
                </div>
              </a>
            </li>

            <li className="product">
              <a href="/product/ferret-beanie-cm">
                <img
                  alt=""
                  src="https://assets.bigcartel.com/product_images/335614356/IMG_2131.PNG?auto=format&amp;fit=max&amp;w=780"
                />
                <div className="product_info">
                  <div className="product_name">ferret beanie (CM)</div>
                  <div className="price sold-out">
                    <span className="currency_sign">$</span>30.00 / Sold Out
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
