const logoSquareWhite = new Proxy({"src":"/_astro/logo-square-white.CAzO-yJA.png","width":2317,"height":2317,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/logo-square-white.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/logo-square-white.png");
							return target[name];
						}
					});

export { logoSquareWhite as default };
