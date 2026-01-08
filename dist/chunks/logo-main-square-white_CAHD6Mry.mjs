const logoMainSquareWhite = new Proxy({"src":"/_astro/logo-main-square-white.BH6Y12VO.png","width":2239,"height":1976,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/logo-main-square-white.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/logo-main-square-white.png");
							return target[name];
						}
					});

export { logoMainSquareWhite as default };
