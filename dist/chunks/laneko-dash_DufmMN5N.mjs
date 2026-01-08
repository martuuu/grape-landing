const lanekoDash = new Proxy({"src":"/_astro/laneko-dash.C5xPMtSC.png","width":3366,"height":1758,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/laneko-dash.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/laneko-dash.png");
							return target[name];
						}
					});

export { lanekoDash as default };
