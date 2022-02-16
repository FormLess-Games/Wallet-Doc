(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    392: function (t, s, a) {
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
                a("h1", { attrs: { id: "developer-documentation" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#developer-documentation" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Developer documentation"),
                ]),
                t._v(" "),
                a("div", { staticClass: "custom-block tip" }, [
                  a("p", { staticClass: "custom-block-title" }, [
                    t._v("Introduction"),
                  ]),
                  t._v(" "),
                  a("p", [
                    t._v(
                      "FormLess Extension injects a global API into websites visited by its users at window.formless to connect to FormLess Extension."
                    ),
                  ]),
                  t._v(" "),
                  a("p", [
                    t._v(
                      "This API specification borrows heavily from API MetaMask provided, so Web3 site developers can easily connect their dApps with the FormLess Extension. The APIs allow websites to request users' FormLess Extension addresses, read data from the blockchain the user is connected to, prompt the users to sign messages and transactions, and allow the website to add or switch networks."
                    ),
                  ]),
                  t._v(" "),
                  a("p", [
                    t._v(
                      "The API this extension wallet provides includes API specified by"
                    ),
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
                    t._v(" and API defined by"),
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
                    t._v("。"),
                  ]),
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "basic-usage" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#basic-usage" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Basic usage"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("For any web3 applications to work, you will have to:"),
                ]),
                t._v(" "),
                a("ol", [
                  a("li", [
                    t._v(
                      "Detect the FormLess Extension provider (window.formless)"
                    ),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("Detect which network the user is connected to"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "Get the user's FormLess Extension accounts\nYou can learn how to accomplish the 2 and 3 from the code："
                    ),
                  ]),
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
                a("h1", { attrs: { id: "properties" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#properties" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Properties"),
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
                  a("p", { staticClass: "custom-block-title" }, [
                    t._v("WARNING"),
                  ]),
                  t._v(" "),
                  a("p", [
                    t._v(
                      "This property is non-standard. Non FormLess Extension providers may also set this property to true."
                    ),
                  ]),
                ]),
                t._v(" "),
                a("p", [
                  a("code", [t._v("true")]),
                  t._v(" if the user has FormLess Extension installed."),
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "methods" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#methods" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Methods"),
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
                  t._v("Please refer to "),
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
                  t._v(
                    " ,the only difference is that we inject different objects."
                  ),
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
                  t._v("Please refer to "),
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
                  t._v(
                    ",the only difference is that we inject different objects."
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
                    "If it needs to switch to Ethereum chain, please use this method. For more information, please refer to "
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
                  t._v("Please refer to "),
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
                  t._v(
                    ",the only difference is that we inject different objects."
                  ),
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
                  t._v("Please refer to "),
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
                  t._v(
                    ",the only difference is that we inject different objects."
                  ),
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
                a("h2", { attrs: { id: "events" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#events" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Events"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("Please refer to "),
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
                  t._v(
                    ",the only difference is that we inject different objects."
                  ),
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
                  t._v("Please refer to "),
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
                  t._v(
                    ",the only difference is that we inject different objects."
                  ),
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
                  t._v("Please refer to "),
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
                  t._v(
                    ",the only difference is that we inject different objects."
                  ),
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
                  t._v("Please refer to "),
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
                  t._v(
                    ",the only difference is that we inject different objects."
                  ),
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
                  t._v("Please refer to "),
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
                  t._v(
                    ",the only difference is that we inject different objects."
                  ),
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
                  t._v("Please refer to "),
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
                  t._v(
                    ",the only difference is that we inject different objects."
                  ),
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
                a("h2", { attrs: { id: "errors" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#errors" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Errors"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("Please refer to "),
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
                  t._v(
                    ",the only difference is that we inject different objects."
                  ),
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "else" } }, [
                  a(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#else" } },
                    [t._v("#")]
                  ),
                  t._v(" Else"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "material" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#material" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Material"),
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "When guiding users to connect to the FormLess Extension, the following materials can be used for configuration if website developers intend to display the wallet logo and name to users."
                  ),
                ]),
                t._v(" "),
                a("p", [
                  a("a", { attrs: { href: "./FormLess_Logo.zip" } }, [
                    t._v("Click to download FormLess Logo"),
                  ]),
                  t._v("\nRecommended name: FormLess Extention"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "download-guide" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#download-guide" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Download guide"),
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "If website developers need to guide users to download FormLess Extention, they can use the following link:"
                  ),
                ]),
                t._v(" "),
                a("p", [t._v("Chrome：")]),
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
                    t._v("Strategies recommended by FormLess Extention"),
                  ]),
                  t._v(" "),
                  a("p", [t._v("guide users to Chrome Web Store.")]),
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
