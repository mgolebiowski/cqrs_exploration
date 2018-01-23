/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
import "babel-polyfill";
import $ from "jquery";
import "bootstrap-sass/assets/javascripts/bootstrap";

let obj = {};

Object.assign(obj,{
  a: 5,
  test: "hello world"
});

let string_template = `
  <h1>To jest string template</h1>
  <p>Moze on miec wiele linijek, a dodatkowo może zawierać zmienne trolo, np. ${ obj.a } albo ${ obj.test }!</p>
  <div class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Modal title</h4>
      </div>
      <div class="modal-body">
        <p>One fine body&hellip;</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
`;

$("body").append($(string_template)).click(()=>{
  $(".modal").modal("show");
});