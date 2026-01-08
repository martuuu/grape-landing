const consulImg = new Proxy({"src":"/_astro/consul-dash.ZBzq9n9x.png","width":3418,"height":1908,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/consul-dash.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/consul-dash.png");
							return target[name];
						}
					});

export { consulImg as default };
