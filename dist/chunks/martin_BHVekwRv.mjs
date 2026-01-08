const martinImg = new Proxy({"src":"/_astro/martin.CdGURbhP.jpg","width":2138,"height":2992,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/martin.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/martin.jpg");
							return target[name];
						}
					});

export { martinImg as default };
