// Compiled using marko@4.21.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/casadocodigo$1.0.0/src/app/views/base/erros/500.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=utf-8><link rel=stylesheet href=/estatico/css/bootstrap.min.css><link rel=stylesheet href=/estatico/css/fontawesome.min.css><link rel=stylesheet href=/estatico/css/casadocodigo.css></head><body><header class=cabecalhoPrincipal><div class=container><div class=\"row align-items-center\"><div class=col-4><h1 class=logo><img src=/estatico/imagens/logo-casadocodigo.svg alt=\"Casa do Código\"></h1></div><nav class=col-8><ul class=cabecalho><li class=cabecalhoPrincipal-navegacao><a href=/  class=login><i class=fas></i>Home</a></li><li class=cabecalhoPrincipal-navegacao><a href=/livros/form class=login><i class=fas></i>Cadastrar</a></li><li class=cabecalhoPrincipal-navegacao><a href=/livros class=login><i class=fas></i>Lista</a></li><li class=cabecalhoPrincipal-navegacao><a href=# class=login><i class=\"fas fa-sign-in-alt\"></i>Login</a></li></ul></nav></div></div></header><main class=conteudoPrincipal><div class=container><h1 class=title>Opss!</h1><p>Houve um problema. Tente mais tarde.</p><a href=/ >Voltar</a></div></main><footer class=rodape><div class=container><div class=\"row align-items-center\"><div class=col-4><img src=/estatico/imagens/logo-rodape.svg class=logo-rodape></div><div class=col-8><ul class=redesSociais><li><a href=http://www.facebook.com/casadocodigo class=compartilhar-facebook target=_blank>/CasaDoCodigo</a></li><li><a href=http://www.twitter.com/casadocodigo class=compartilhar-twitter target=_blank>@casadocodigo</a></li></ul></div></div></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "43");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/casadocodigo$1.0.0/src/app/views/base/erros/500.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
