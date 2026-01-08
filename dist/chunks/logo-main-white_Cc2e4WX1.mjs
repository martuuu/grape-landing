const logoMainWhite = new Proxy({"src":"/_astro/logo-main-white.B_0zD95U.png","width":2039,"height":2039,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/logo-main-white.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/logo-main-white.png");
							return target[name];
						}
					});

export { logoMainWhite as default };
