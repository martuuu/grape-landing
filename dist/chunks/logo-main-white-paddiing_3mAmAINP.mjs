const logoMainWhitePaddiing = new Proxy({"src":"/_astro/logo-main-white-paddiing.AwJNUuQH.png","width":2239,"height":2239,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/logo-main-white-paddiing.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/logo-main-white-paddiing.png");
							return target[name];
						}
					});

export { logoMainWhitePaddiing as default };
