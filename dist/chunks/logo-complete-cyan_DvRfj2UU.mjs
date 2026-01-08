const logoCompleteCyan = new Proxy({"src":"/_astro/logo-complete-cyan.BVVieSUe.png","width":2575,"height":432,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/logo-complete-cyan.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/logo-complete-cyan.png");
							return target[name];
						}
					});

export { logoCompleteCyan as default };
