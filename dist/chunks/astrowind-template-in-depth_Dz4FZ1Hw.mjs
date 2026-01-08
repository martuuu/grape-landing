import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CmDtgPsN.mjs';
import 'clsx';

const frontmatter = {
  "publishDate": "2023-07-17T00:00:00.000Z",
  "title": "AstroWind template in depth",
  "excerpt": "While easy to get started, Astrowind is quite complex internally.  This page provides documentation on some of the more intricate parts.",
  "image": "https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1651&q=80",
  "category": "Documentation",
  "tags": ["astro", "tailwind css", "front-end"],
  "metadata": {
    "canonical": "https://astrowind.vercel.app/astrowind-template-in-depth"
  },
  "readingTime": 2
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "mauris-velit-laoreet-vitae-cursus-augue",
    "text": "Mauris velit laoreet vitae cursus augue"
  }, {
    "depth": 3,
    "slug": "nisi-rutrum-eros-euismod",
    "text": "Nisi rutrum eros euismod"
  }, {
    "depth": 3,
    "slug": "nisi-rutrum-eros-euismod-1",
    "text": "Nisi rutrum eros euismod"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "mauris-velit-laoreet-vitae-cursus-augue",
      children: "Mauris velit laoreet vitae cursus augue"
    }), "\n", createVNode(_components.p, {
      children: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", createVNode(_components.strong, {
        children: "Pellentesque"
      }), " euismod, nibh ac aliquam aliquam, dui nulla ultrices erat, sit amet dictum nisl ex id nunc. Sed malesuada, orci vitae tempus euismod, nunc erat semper nisi, in aliquet nibh nisl eget nulla. Donec eget ipsum vitae nibh blandit consequat. Donec facilisis, nibh id aliquam fermentum, mi lorem molestie nisl, id posuere nisi nisi at nulla."]
    }), "\n", createVNode(_components.p, {
      children: "Duis euismod, nulla sit amet mattis euismod, nibh nunc rhoncus nibh, id interdum nunc nisl id lorem. Donec id nunc quis nulla aliquam cursus. Integer vitae nunc nunc. Sed sed nulla vitae nibh interdum gravida. Sed a nunc nibh."
    }), "\n", createVNode(_components.p, {
      children: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer euismod, nunc eu lobortis mattis, lectus sem sagittis nunc, id laoreet nunc metus id lectus. Sed consectetur, urna at euismod consectetur, nunc nisi bibendum nibh, ut rhoncus nibh nunc vel mi."
    }), "\n", createVNode(_components.p, {
      children: ["Nam eget nunc massa. Nulla facilisi. Sed a ligula vel nunc porta sollicitudin. ", createVNode(_components.strong, {
        children: "Pellentesque"
      }), " vel mauris vitae nibh varius feugiat. Fusce eget nunc id ligula bibendum venenatis."]
    }), "\n", createVNode(_components.h3, {
      id: "nisi-rutrum-eros-euismod",
      children: "Nisi rutrum eros euismod"
    }), "\n", createVNode(_components.p, {
      children: "Maecenas eget justo sed nibh consequat vulputate. Sed euismod neque vel nunc rhoncus, nec tincidunt nisl laoreet. Sed euismod justo id nulla varius, id cursus nibh tincidunt. Sed euismod est et nunc consectetur, id tempus nibh euismod."
    }), "\n", createVNode(_components.p, {
      children: "In hac habitasse platea dictumst. Integer euismod, nunc eu lobortis mattis, lectus sem sagittis nunc, id laoreet nunc metus id lectus. Aenean sagittis, ligula vel blandit aliquam, nisl nunc euismod elit, nec tincidunt lectus nunc vitae nunc. Sed euismod justo id nulla varius, id cursus nibh tincidunt. Sed euismod est et nunc consectetur, id tempus nibh euismod."
    }), "\n", createVNode(_components.h3, {
      id: "nisi-rutrum-eros-euismod-1",
      children: "Nisi rutrum eros euismod"
    }), "\n", createVNode(_components.p, {
      children: "Quisque euismod lectus ac nunc dictum, id eleifend nunc euismod. Sed euismod, nunc eu lobortis mattis, lectus sem sagittis nunc, id laoreet nunc metus id lectus. Sed consectetur, urna at euismod consectetur, nunc nisi bibendum nibh, ut rhoncus nibh nunc vel mi."
    }), "\n", createVNode(_components.p, {
      children: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod est et nunc consectetur, id tempus nibh euismod."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/data/post/astrowind-template-in-depth.mdx";
const file = "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/data/post/astrowind-template-in-depth.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/data/post/astrowind-template-in-depth.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
