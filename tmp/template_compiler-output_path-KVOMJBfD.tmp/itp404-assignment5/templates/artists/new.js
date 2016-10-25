export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "revision": "Ember@2.8.2",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 5,
          "column": 0
        }
      },
      "moduleName": "itp404-assignment5/templates/artists/new.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h1");
      var el2 = dom.createTextNode("new artist");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("button");
      dom.setAttribute(el1,"type","submit");
      var el2 = dom.createTextNode("Add Artist");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [6]);
      var morphs = new Array(3);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,4,4,contextualElement);
      morphs[2] = dom.createElementMorph(element0);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["content","outlet",["loc",[null,[1,0],[1,10]]],0,0,0,0],
      ["inline","input",[],["value",["subexpr","@mut",[["get","name",["loc",[null,[3,14],[3,18]]],0,0,0,0]],[],[],0,0],"type","text","id","name"],["loc",[null,[3,0],[3,42]]],0,0],
      ["element","action",["addArtist"],[],["loc",[null,[4,22],[4,44]]],0,0]
    ],
    locals: [],
    templates: []
  };
}()));