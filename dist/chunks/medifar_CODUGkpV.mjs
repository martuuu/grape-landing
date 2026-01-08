const medifarImg = new Proxy({"src":"/_astro/medifar.8T3O4UF0.png","width":3452,"height":1922,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/medifar.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/medifar.png");
							return target[name];
						}
					});

export { medifarImg as default };
