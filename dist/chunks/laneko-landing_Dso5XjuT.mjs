const lanekoImg = new Proxy({"src":"/_astro/laneko-landing.CRn8RlBd.png","width":3110,"height":1810,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/laneko-landing.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/laneko-landing.png");
							return target[name];
						}
					});

export { lanekoImg as default };
