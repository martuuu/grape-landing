const germanImg = new Proxy({"src":"/_astro/german.THQwNbQg.jpg","width":1170,"height":1561,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/german.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/german.jpg");
							return target[name];
						}
					});

export { germanImg as default };
