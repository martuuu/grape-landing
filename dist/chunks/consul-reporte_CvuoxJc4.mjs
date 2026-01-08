const consulReporte = new Proxy({"src":"/_astro/consul-reporte.BPnBZkHE.png","width":2844,"height":1752,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/consul-reporte.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/images/consul-reporte.png");
							return target[name];
						}
					});

export { consulReporte as default };
