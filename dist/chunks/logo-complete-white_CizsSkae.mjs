const logoCompleteWhite = new Proxy({"src":"/_astro/logo-complete-white.DIGRTUxl.png","width":2400,"height":402,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/logo-complete-white.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/logo-complete-white.png");
							return target[name];
						}
					});

export { logoCompleteWhite as default };
