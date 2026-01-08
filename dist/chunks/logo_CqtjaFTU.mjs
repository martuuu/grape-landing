const logoImage = new Proxy({"src":"/_astro/logo.CSxIYmi1.png","width":2116,"height":1815,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/logo.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/logo.png");
							return target[name];
						}
					});

export { logoImage as default };
