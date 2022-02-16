(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    393: function (t, s, a) {
      "use strict";
      a.r(s);
      var n = a(54),
        e = Object(n.a)(
          {},
          function () {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                a("h1", { attrs: { id: "開發者文檔" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#開發者文檔" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 開發者文檔"),
                ]),
                t._v(" "),
                a("div", { staticClass: "custom-block tip" }, [
                  a("p", { staticClass: "custom-block-title" }, [t._v("介紹")]),
                  t._v(" "),
                  a("p", [
                    t._v(
                      "FormLess Extention 會向用戶訪問的網站註入了一個全局 API window.formless，由此來連接到FormLess Extention。"
                    ),
                  ]),
                  t._v(" "),
                  a("p", [
                    t._v(
                      "該 API 規範大量借鑒了 MetaMask 提供的 API ，因此，Web3 開發人員可以輕松地將 dApp 與FormLess Extention連接起來。這些 API 允許網站請求用戶的FormLess Extention地址，從用戶連接的區塊鏈中讀取數據，提示用戶簽署消息和交易，允許網站新增或切換網絡等。"
                    ),
                  ]),
                  t._v(" "),
                  a("p", [
                    t._v("FormLess Extention提供的 API 包括"),
                    a(
                      "a",
                      {
                        attrs: {
                          href: "https://eips.ethereum.org/EIPS/eip-1193",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("EIP-1193"), a("OutboundLink")],
                      1
                    ),
                    t._v(" 指定的 API 和"),
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.metamask.io/guide/ethereum-provider.html",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("MetaMask"), a("OutboundLink")],
                      1
                    ),
                    t._v(" 定義的 API。"),
                  ]),
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "基本用法" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#基本用法" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 基本用法"),
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "對於任何基於Ethereum、Polygon 、BSC、 HECO、OKExChain等EVM系的Web3應用程序，您必須："
                  ),
                ]),
                t._v(" "),
                a("ol", [
                  a("li", [t._v("檢測FormLess Extention (window.formless)")]),
                  t._v(" "),
                  a("li", [t._v("檢測用戶連接到哪個網絡")]),
                  t._v(" "),
                  a("li", [t._v("獲取用戶的賬戶地址")]),
                ]),
                t._v(" "),
                a("p", [t._v("這段代碼解釋了如何完成上述第2、3點要求：")]),
                t._v(" "),
                a("div", { staticClass: "language-javascript extra-class" }, [
                  a(
                    "pre",
                    { pre: !0, attrs: { class: "language-javascript" } },
                    [
                      a("code", [
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "/**********************************************************/"
                            ),
                          ]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "/* Handle chain (network) and chainChanged (per EIP-1193) */"
                            ),
                          ]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "/**********************************************************/"
                            ),
                          ]
                        ),
                        t._v("\n\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "// Normally, we would recommend the 'eth_chainId' RPC method, but it currently"
                            ),
                          ]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "// returns incorrectly formatted chain ID values."
                            ),
                          ]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("let")]
                        ),
                        t._v(" currentChainId "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("=")]
                        ),
                        t._v(" formless"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        t._v("chainId"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n\nformless"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("on")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'chainChanged'")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v(" handleChainChanged"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("function")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("handleChainChanged")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token parameter" } },
                          [t._v("_chainId")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n  "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "// We recommend reloading the page, unless you must do otherwise"
                            ),
                          ]
                        ),
                        t._v("\n  window"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        t._v("location"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("reload")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v("\n\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "/***********************************************************/"
                            ),
                          ]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "/* Handle user accounts and accountsChanged (per EIP-1193) */"
                            ),
                          ]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "/***********************************************************/"
                            ),
                          ]
                        ),
                        t._v("\n\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("let")]
                        ),
                        t._v(" currentAccount "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("=")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("null")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\nformless\n  "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("request")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v(" method"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'eth_accounts'")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v("\n  "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("then")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("handleAccountsChanged"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v("\n  "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("catch")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token parameter" } },
                          [t._v("err")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("=>")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [t._v("// Some unexpected error.")]
                        ),
                        t._v("\n    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "// For backwards compatibility reasons, if no accounts are available,"
                            ),
                          ]
                        ),
                        t._v("\n    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [t._v("// eth_accounts will return an empty array.")]
                        ),
                        t._v("\n    console"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("error")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("err"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n  "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "// Note that this event is emitted on page load."
                            ),
                          ]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "// If the array of accounts is non-empty, you're already"
                            ),
                          ]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [t._v("// connected.")]
                        ),
                        t._v("\nformless"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("on")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'accountsChanged'")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v(" handleAccountsChanged"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "// For now, 'eth_accounts' will continue to always return an array"
                            ),
                          ]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("function")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("handleAccountsChanged")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token parameter" } },
                          [t._v("accounts")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n  "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("if")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("accounts"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        t._v("length "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("===")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token number" } },
                          [t._v("0")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "// formless is locked or the user has not connected any accounts"
                            ),
                          ]
                        ),
                        t._v("\n    console"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("log")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'Please connect to Formless Wallet.'")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n  "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("else")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("if")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("accounts"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("[")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token number" } },
                          [t._v("0")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("]")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("!==")]
                        ),
                        t._v(" currentAccount"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n    currentAccount "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("=")]
                        ),
                        t._v(" accounts"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("[")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token number" } },
                          [t._v("0")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("]")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [t._v("// Do any other work!")]
                        ),
                        t._v("\n  "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v("\n\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "/*********************************************/"
                            ),
                          ]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "/* Access the user's accounts (per EIP-1102) */"
                            ),
                          ]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "/*********************************************/"
                            ),
                          ]
                        ),
                        t._v("\n\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "// You should only attempt to request the user's accounts in response to user"
                            ),
                          ]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [t._v("// interaction, such as a button click.")]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "// Otherwise, you popup-spam the user like it's 1999."
                            ),
                          ]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "// If you fail to retrieve the user's account(s), you should encourage the user"
                            ),
                          ]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [t._v("// to initiate the attempt.")]
                        ),
                        t._v("\ndocument"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("getElementById")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'connectButton'")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v(" connect"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("function")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("connect")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n  formless\n    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("request")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v(" method"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'eth_requestAccounts'")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v("\n    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("then")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("handleAccountsChanged"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v("\n    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("catch")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token parameter" } },
                          [t._v("err")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("=>")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n      "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("if")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("err"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        t._v("code "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("===")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token number" } },
                          [t._v("4001")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n        "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [t._v("// EIP-1193 userRejectedRequest error")]
                        ),
                        t._v("\n        "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "// If this happens, the user rejected the connection request."
                            ),
                          ]
                        ),
                        t._v("\n        console"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("log")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'Please connect to Formless Wallet.'")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n      "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("else")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n        console"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("error")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("err"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n      "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v("\n    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v("\n"),
                      ]),
                    ]
                  ),
                ]),
                a("h1", { attrs: { id: "屬性" } }, [
                  a(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#屬性" } },
                    [t._v("#")]
                  ),
                  t._v(" 屬性"),
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "formless-isformless" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#formless-isformless" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" formless.isFormless"),
                ]),
                t._v(" "),
                a("div", { staticClass: "custom-block warning" }, [
                  a("p", { staticClass: "custom-block-title" }, [t._v("註意")]),
                  t._v(" "),
                  a("p", [
                    t._v(
                      "此屬性是非標準的。非FormLess Extention插件錢包也可以將此屬性設置為 "
                    ),
                    a("code", [t._v("true")]),
                    t._v("。"),
                  ]),
                ]),
                t._v(" "),
                a("p", [
                  t._v("如果用戶安裝了FormLess Extention，則為 "),
                  a("code", [t._v("true")]),
                  t._v("。"),
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "方法" } }, [
                  a(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#方法" } },
                    [t._v("#")]
                  ),
                  t._v(" 方法"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "formless-isconnected" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#formless-isconnected" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" formless.isConnected()"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("如果提供者連接到當前鏈，則返回"),
                  a("code", [t._v("true")]),
                  t._v("，否則返回"),
                  a("code", [t._v("false")]),
                  t._v("。 更多信息請參考"),
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.metamask.io/guide/ethereum-provider.html#ethereum-isconnected",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("MetaMask Doc"), a("OutboundLink")],
                    1
                  ),
                  t._v(" ，唯一的區別是我們註入了不同的對象。"),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-javascript extra-class" }, [
                  a(
                    "pre",
                    { pre: !0, attrs: { class: "language-javascript" } },
                    [
                      a("code", [
                        t._v("formless"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("isConnected")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" boolean"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n"),
                      ]),
                    ]
                  ),
                ]),
                a("h3", { attrs: { id: "formless-request-args" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#formless-request-args" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" formless.request(args)"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("通過FormLess Extention，用"),
                  a("code", [t._v("request")]),
                  t._v("向以太坊提交 RPC 請求。更多信息請參考"),
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.metamask.io/guide/ethereum-provider.html#ethereum-request-args",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("MetaMask Doc"), a("OutboundLink")],
                    1
                  ),
                  t._v("，唯一的區別是我們註入了不同的對象。"),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-javascript extra-class" }, [
                  a(
                    "pre",
                    { pre: !0, attrs: { class: "language-javascript" } },
                    [
                      a("code", [
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("interface")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token class-name" } },
                          [t._v("RequestArguments")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n  method"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" string"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n  params"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("?")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" unknown"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("[")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("]")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("|")]
                        ),
                        t._v(" object"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v("\n\nformless"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("request")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("args"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" RequestArguments"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" Promise"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("<")]
                        ),
                        t._v("unknown"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(">")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n"),
                      ]),
                    ]
                  ),
                ]),
                a("h4", { attrs: { id: "wallet-switchethereumchain" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#wallet-switchethereumchain" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" wallet_switchEthereumChain"),
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "如果需要切換到以太坊網絡，請使用此方法。更多信息請參考"
                  ),
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.metamask.io/guide/rpc-api.html#usage-with-wallet-switchethereumchain",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("MetaMask Doc"), a("OutboundLink")],
                    1
                  ),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-javascript extra-class" }, [
                  a(
                    "pre",
                    { pre: !0, attrs: { class: "language-javascript" } },
                    [
                      a("code", [
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("try")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n  "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("await")]
                        ),
                        t._v(" formless"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("request")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n    method"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'wallet_switchEthereumChain'")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v("\n    params"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("[")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v(" chainId"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'0xf00'")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("]")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v("\n  "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("catch")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("switchError"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n  "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "// This error code indicates that the chain has not been added to Formless Wallet."
                            ),
                          ]
                        ),
                        t._v("\n  "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("if")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("error"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        t._v("code "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("===")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token number" } },
                          [t._v("4902")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("try")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n      "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("await")]
                        ),
                        t._v(" formless"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("request")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n        method"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'wallet_addEthereumChain'")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v("\n        params"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("[")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v(" chainId"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'0xf00'")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v(" rpcUrl"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'https://...'")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [t._v("/* ... */")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("]")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v("\n      "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("catch")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("addError"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n      "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [t._v('// handle "add" error')]
                        ),
                        t._v("\n    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v("\n  "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v("\n  "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [t._v('// handle other "switch" errors')]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v("\n"),
                      ]),
                    ]
                  ),
                ]),
                a("h3", { attrs: { id: "formless-requestchainid" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#formless-requestchainid" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" formless.requestChainId()"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("可以獲取到當前錢包的鏈id。更多信息請參考"),
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.metamask.io/guide/ethereum-provider.html#ethereum-chainid-deprecated",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("MetaMask Doc"), a("OutboundLink")],
                    1
                  ),
                  t._v("，唯一的區別是我們註入了不同的對象。"),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-typescript extra-class" }, [
                  a(
                    "pre",
                    { pre: !0, attrs: { class: "language-typescript" } },
                    [
                      a("code", [
                        t._v("formless"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("requestChainId")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token builtin" } },
                          [t._v("Promise")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("<")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token builtin" } },
                          [t._v("string")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(">")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n"),
                      ]),
                    ]
                  ),
                ]),
                a("h3", { attrs: { id: "formless-requestaccounts" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#formless-requestaccounts" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" formless.requestAccounts()"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("請參考"),
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.metamask.io/guide/ethereum-provider.html#ethereum-selectedaddress-deprecated",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("MetaMask Doc"), a("OutboundLink")],
                    1
                  ),
                  t._v("，唯一的區別是我們註入了不同的對象。"),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-typescript extra-class" }, [
                  a(
                    "pre",
                    { pre: !0, attrs: { class: "language-typescript" } },
                    [
                      a("code", [
                        t._v("formless"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("requestAccounts")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token builtin" } },
                          [t._v("Promise")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("<")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token builtin" } },
                          [t._v("string")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("[")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("]")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(">")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n"),
                      ]),
                    ]
                  ),
                ]),
                a("h2", { attrs: { id: "事件" } }, [
                  a(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#事件" } },
                    [t._v("#")]
                  ),
                  t._v(" 事件"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("請參考"),
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.metamask.io/guide/ethereum-provider.html#events",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("MetaMask Doc"), a("OutboundLink")],
                    1
                  ),
                  t._v("，唯一的區別是我們註入了不同的對象。"),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-javascript extra-class" }, [
                  a(
                    "pre",
                    { pre: !0, attrs: { class: "language-javascript" } },
                    [
                      a("code", [
                        t._v("formless"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("on")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'accountsChanged'")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token parameter" } },
                          [t._v("accounts")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("=>")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n  "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [t._v("// Handle the new accounts, or lack thereof.")]
                        ),
                        t._v("\n  "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              '// "accounts" will always be an array, but it can be empty.'
                            ),
                          ]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n\nformless"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("on")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'chainChanged'")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token parameter" } },
                          [t._v("chainId")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("=>")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n  "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [t._v("// Handle the new chain.")]
                        ),
                        t._v("\n  "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "// Correctly handling chain changes can be complicated."
                            ),
                          ]
                        ),
                        t._v("\n  "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [
                            t._v(
                              "// We recommend reloading the page unless you have a very good reason not to."
                            ),
                          ]
                        ),
                        t._v("\n  window"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        t._v("location"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("reload")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n"),
                      ]),
                    ]
                  ),
                ]),
                a("h3", { attrs: { id: "connect" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#connect" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" connect"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("請參考"),
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.metamask.io/guide/ethereum-provider.html#connect",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("MetaMask Doc"), a("OutboundLink")],
                    1
                  ),
                  t._v("，唯一的區別是我們註入了不同的對象。"),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-typescript extra-class" }, [
                  a(
                    "pre",
                    { pre: !0, attrs: { class: "language-typescript" } },
                    [
                      a("code", [
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("interface")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token class-name" } },
                          [t._v("ConnectInfo")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n  chainId"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token builtin" } },
                          [t._v("string")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v("\n\nformless"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("on")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'connect'")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          {
                            pre: !0,
                            attrs: {
                              class: "token function-variable function",
                            },
                          },
                          [t._v("handler")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("connectInfo"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" ConnectInfo"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("=>")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("void")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n"),
                      ]),
                    ]
                  ),
                ]),
                a("h3", { attrs: { id: "disconnect" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#disconnect" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" disconnect"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("請參考"),
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.metamask.io/guide/ethereum-provider.html#disconnect",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("MetaMask Doc"), a("OutboundLink")],
                    1
                  ),
                  t._v("，唯一的區別是我們註入了不同的對象。"),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-typescript extra-class" }, [
                  a(
                    "pre",
                    { pre: !0, attrs: { class: "language-typescript" } },
                    [
                      a("code", [
                        t._v("formless"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("on")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'disconnect'")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          {
                            pre: !0,
                            attrs: {
                              class: "token function-variable function",
                            },
                          },
                          [t._v("handler")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("error"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" ProviderRpcError"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("=>")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("void")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n"),
                      ]),
                    ]
                  ),
                ]),
                a("h3", { attrs: { id: "accountschanged" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#accountschanged" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" accountsChanged"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("請參考"),
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.metamask.io/guide/ethereum-provider.html#accountschanged",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("MetaMask Doc"), a("OutboundLink")],
                    1
                  ),
                  t._v("，唯一的區別是我們註入了不同的對象。"),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-typescript extra-class" }, [
                  a(
                    "pre",
                    { pre: !0, attrs: { class: "language-typescript" } },
                    [
                      a("code", [
                        t._v("formless"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("on")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'accountsChanged'")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          {
                            pre: !0,
                            attrs: {
                              class: "token function-variable function",
                            },
                          },
                          [t._v("handler")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("accounts"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token builtin" } },
                          [t._v("Array")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("<")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token builtin" } },
                          [t._v("string")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(">")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("=>")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("void")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n"),
                      ]),
                    ]
                  ),
                ]),
                a("h3", { attrs: { id: "chainchanged" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#chainchanged" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" chainChanged"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("請參考"),
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.metamask.io/guide/ethereum-provider.html#chainchanged",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("MetaMask Doc"), a("OutboundLink")],
                    1
                  ),
                  t._v("，唯一的區別是我們註入了不同的對象。"),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-typescript extra-class" }, [
                  a(
                    "pre",
                    { pre: !0, attrs: { class: "language-typescript" } },
                    [
                      a("code", [
                        t._v("formless"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("on")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'chainChanged'")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          {
                            pre: !0,
                            attrs: {
                              class: "token function-variable function",
                            },
                          },
                          [t._v("handler")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("chainId"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token builtin" } },
                          [t._v("string")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("=>")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("void")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n\nformless"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("on")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'chainChanged'")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("_chainId"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("=>")]
                        ),
                        t._v(" window"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        t._v("location"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("reload")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n"),
                      ]),
                    ]
                  ),
                ]),
                a("h3", { attrs: { id: "message" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#message" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" message"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("請參考"),
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.metamask.io/guide/ethereum-provider.html#message",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("MetaMask Doc"), a("OutboundLink")],
                    1
                  ),
                  t._v("，唯一的區別是我們註入了不同的對象。"),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-typescript extra-class" }, [
                  a(
                    "pre",
                    { pre: !0, attrs: { class: "language-typescript" } },
                    [
                      a("code", [
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("interface")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token class-name" } },
                          [t._v("ProviderMessage")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\ntype"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token builtin" } },
                          [t._v("string")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\ndata"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token builtin" } },
                          [t._v("unknown")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v("\n\nformless"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("on")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'message'")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          {
                            pre: !0,
                            attrs: {
                              class: "token function-variable function",
                            },
                          },
                          [t._v("handler")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("message"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" ProviderMessage"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("=>")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("void")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n"),
                      ]),
                    ]
                  ),
                ]),
                a("h2", { attrs: { id: "錯誤信息" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#錯誤信息" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 錯誤信息"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("請參考"),
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.metamask.io/guide/ethereum-provider.html#errors",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("MetaMask Doc"), a("OutboundLink")],
                    1
                  ),
                  t._v("，唯一的區別是我們註入了不同的對象。"),
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "其它" } }, [
                  a(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#其它" } },
                    [t._v("#")]
                  ),
                  t._v(" 其它"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "素材" } }, [
                  a(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#素材" } },
                    [t._v("#")]
                  ),
                  t._v(" 素材"),
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "引導用戶連接FormLess Extention時，如果網站開發者需要為用戶展示錢包Logo及錢包名稱，可以通過以下素材進行配置。"
                  ),
                ]),
                t._v(" "),
                a("p", [
                  a("a", { attrs: { href: "../FormLess_Logo.zip" } }, [
                    t._v("點擊下載FormLess Logo"),
                  ]),
                  t._v("\n推薦的插件名稱：FormLess Extention"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "引導下載" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#引導下載" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 引導下載"),
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "在用戶未下載FormLess Extention時，如果網站開發者需要引導用戶下載。可使用以下應用市場鏈接："
                  ),
                ]),
                t._v(" "),
                a("p", [t._v("Chrome下載地址：")]),
                t._v(" "),
                a("p", [
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://chrome.google.com/webstore/detail/formless/bedankimochhfaikjlbipbpddcpnebff?hl=en",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [
                      t._v(
                        "https://chrome.google.com/webstore/detail/formless/bedankimochhfaikjlbipbpddcpnebff?hl=en"
                      ),
                      a("OutboundLink"),
                    ],
                    1
                  ),
                ]),
                t._v(" "),
                a("div", { staticClass: "custom-block tip" }, [
                  a("p", { staticClass: "custom-block-title" }, [
                    t._v("FormLess Extention建議引導下載邏輯"),
                  ]),
                  t._v(" "),
                  a("p", [
                    t._v("如果是Chrome内核瀏覽器，則引導去chrome應用市場。"),
                  ]),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      s.default = e.exports;
    },
  },
]);
