var numberOfItemsToAdd = 100;
var Suites = [];

Suites.push({
    name: 'Elm',
    url: 'todomvc/elm-0.16/index.html',
    version: '0.16 + virtual-dom 1.0',
    prepare: function (runner, contentWindow, contentDocument) {
        return runner.waitForElement('#new-todo,.new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('Adding' + numberOfItemsToAdd + 'Items', function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
                var inputEvent = document.createEvent('Event');
                inputEvent.initEvent('input', true, true);
                newTodo.value = 'Something to do ' + i;
                newTodo.dispatchEvent(inputEvent);

                var keydownEvent = document.createEvent('Event');
                keydownEvent.initEvent('keydown', true, true);
                keydownEvent.keyCode = 13; // VK_ENTER
                newTodo.dispatchEvent(keydownEvent);
            }
        }),
        new BenchmarkTestStep('CompletingAllItems', function (newTodo, contentWindow, contentDocument) {
            var checkboxes = contentDocument.querySelectorAll('.toggle');
            for (var i = 0; i < checkboxes.length; i++)
                checkboxes[i].click();
        }),
        new BenchmarkTestStep('DeletingAllItems', function (newTodo, contentWindow, contentDocument) {
            var deleteButtons = contentDocument.querySelectorAll('.destroy');
            for (var i = 0; i < deleteButtons.length; i++)
                deleteButtons[i].click();
        }),
        new BenchmarkTestStep('Clean', function (newTodo, contentWindow, contentDocument) {
          window.localStorage.clear();
        })
    ]
});


Suites.push({
    name: 'Mercury',
    url: 'todomvc/mercury/index.html',
    version: '3.1.7 + virtual-dom 0.8',
    prepare: function (runner, contentWindow, contentDocument) {
        return runner.waitForElement('#new-todo,.new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('Adding' + numberOfItemsToAdd + 'Items', function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
                var inputEvent = document.createEvent('Event');
                inputEvent.initEvent('input', true, true);
                newTodo.value = 'Something to do ' + i;
                newTodo.dispatchEvent(inputEvent);

                var keydownEvent = document.createEvent('Event');
                keydownEvent.initEvent('keydown', true, true);
                keydownEvent.keyCode = 13; // VK_ENTER
                newTodo.dispatchEvent(keydownEvent);
            }
        }),
        new BenchmarkTestStep('CompletingAllItems', function (newTodo, contentWindow, contentDocument) {
            var checkboxes = contentDocument.querySelectorAll('.toggle');
            for (var i = 0; i < checkboxes.length; i++)
                checkboxes[i].click();
        }),
        new BenchmarkTestStep('DeletingAllItems', function (newTodo, contentWindow, contentDocument) {
            var deleteButtons = contentDocument.querySelectorAll('.destroy');
            for (var i = 0; i < deleteButtons.length; i++)
                deleteButtons[i].click();
        }),
        new BenchmarkTestStep('Clean', function (newTodo, contentWindow, contentDocument) {
          window.localStorage.clear();
        })
    ]
});

Suites.push({
    name: 'Vue.js',
    url: 'todomvc/vue/index.html',
    version: '0.2.0',
    prepare: function (runner, contentWindow, contentDocument) {
        return runner.waitForElement('#new-todo,.new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('Adding' + numberOfItemsToAdd + 'Items', function (newTodo, contentWindow, contentDocument) {
          for (var i = 0; i < numberOfItemsToAdd; i++) {
            var inputEvent = document.createEvent('Event');
            inputEvent.initEvent('input', true, true);
            newTodo.value = 'Something to do ' + i;
            newTodo.dispatchEvent(inputEvent);

            var keyupEvent = document.createEvent('Event');
            keyupEvent.initEvent('keyup', true, false);
            keyupEvent.keyCode = 13;
            newTodo.dispatchEvent(keyupEvent);
          }
        }),
        new BenchmarkTestStep('CompletingAllItems', function (newTodo, contentWindow, contentDocument) {
            var checkboxes = contentDocument.querySelectorAll('.toggle');
            for (var i = 0; i < checkboxes.length; i++)
                checkboxes[i].click();
        }),
        new BenchmarkTestStep('DeletingAllItems', function (newTodo, contentWindow, contentDocument) {
            var deleteButtons = contentDocument.querySelectorAll('.destroy');
            for (var i = 0; i < deleteButtons.length; i++)
                deleteButtons[i].click();
        }),
        new BenchmarkTestStep('Clean', function (newTodo, contentWindow, contentDocument) {
          window.localStorage.clear();
        })

    ]
});


Suites.push({
    name: 'Mithril',
    url: 'todomvc/mithril/index.html',
    version: '0.2.0',
    prepare: function (runner, contentWindow, contentDocument) {
        return runner.waitForElement('#new-todo,.new-todo').then(function (element) {
            element.focus();
            console.dir(element);
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('Adding' + numberOfItemsToAdd + 'Items', function (newTodo, contentWindow, contentDocument) {
          for (var i = 0; i < numberOfItemsToAdd; i++) {
            var inputEvent = document.createEvent('Event');
            inputEvent.initEvent('input', true, false);
            newTodo.value = 'Something to do ' + i;
            newTodo.dispatchEvent(inputEvent);

            var keyupEvent = document.createEvent('Event');
            keyupEvent.initEvent('keyup', true, false);
            keyupEvent.keyCode = 13;
            newTodo.dispatchEvent(keyupEvent)
          }
        }),
        new BenchmarkTestStep('CompletingAllItems', function (newTodo, contentWindow, contentDocument) {
            var checkboxes = contentDocument.querySelectorAll('.toggle');
            for (var i = 0; i < checkboxes.length; i++)
                checkboxes[i].click();
        }),
        new BenchmarkTestStep('DeletingAllItems', function (newTodo, contentWindow, contentDocument) {
            var deleteButtons = contentDocument.querySelectorAll('.destroy');
            for (var i = 0; i < deleteButtons.length; i++)
                deleteButtons[i].click();
        }),
        new BenchmarkTestStep('Clean', function (newTodo, contentWindow, contentDocument) {
          window.localStorage.clear();
        })
    ]
});


Suites.push({
    name: 'React',
    url: 'todomvc/react/index.html',
    version: '0.10.0',
    prepare: function (runner, contentWindow, contentDocument) {
        // contentWindow.Utils.store = function () {}
        return runner.waitForElement('#new-todo,.new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('Adding' + numberOfItemsToAdd + 'Items', function (newTodo, contentWindow, contentDocument) {
          for (var i = 0; i < numberOfItemsToAdd; i++) {
              var inputEvent = document.createEvent('Event');
              inputEvent.initEvent('input', true, true);
              newTodo.value = 'Something to do ' + i;
              newTodo.dispatchEvent(inputEvent);

              var keydownEvent = document.createEvent('Event');
              keydownEvent.initEvent('keydown', true, true);
              keydownEvent.keyCode = 13; // VK_ENTER
              newTodo.dispatchEvent(keydownEvent);
          }
        }),
        new BenchmarkTestStep('CompletingAllItems', function (newTodo, contentWindow, contentDocument) {
            var checkboxes = contentDocument.querySelectorAll('.toggle');
            for (var i = 0; i < checkboxes.length; i++)
                checkboxes[i].click();
        }),
        new BenchmarkTestStep('DeletingAllItems', function (newTodo, contentWindow, contentDocument) {
            var deleteButtons = contentDocument.querySelectorAll('.destroy');
            for (var i = 0; i < deleteButtons.length; i++)
                deleteButtons[i].click();
        }),
        new BenchmarkTestStep('Clean', function (newTodo, contentWindow, contentDocument) {
          window.localStorage.clear();
        })
    ]
});


Suites.push({
    name: 'Backbone',
    url: 'todomvc/typescript-backbone/index.html',
    version: '1.2.3',
    prepare: function (runner, contentWindow, contentDocument) {
    contentWindow.Backbone.sync = function () {}
        return runner.waitForElement('#new-todo,.new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('Adding' + numberOfItemsToAdd + 'Items', function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
                var keypressEvent = document.createEvent('Event');
                keypressEvent.initEvent('keypress', true, true);
                keypressEvent.which = 13;
                newTodo.value = 'Something to do ' + i;
                newTodo.dispatchEvent(keypressEvent)
            }
        }),
        new BenchmarkTestStep('CompletingAllItems', function (newTodo, contentWindow, contentDocument) {
            var checkboxes = contentDocument.querySelectorAll('.toggle');
            for (var i = 0; i < checkboxes.length; i++)
                checkboxes[i].click();
        }),
        new BenchmarkTestStep('DeletingAllItems', function (newTodo, contentWindow, contentDocument) {
            var deleteButtons = contentDocument.querySelectorAll('.destroy');
            for (var i = 0; i < deleteButtons.length; i++)
                deleteButtons[i].click();
        }),
        new BenchmarkTestStep('Clean', function (newTodo, contentWindow, contentDocument) {
          window.localStorage.clear();
        })
    ]
});

Suites.push({
    name: 'Ember',
    url: 'todomvc/emberjs/index.html',
    version: '1.4.0 + Handlebars 1.3.0',
    prepare: function (runner, contentWindow, contentDocument) {
        contentWindow.Todos.Store = contentWindow.DS.Store.extend({
            revision: 12,
            adapter: 'Todos.LSAdapter',
            commit: function () { }
        });

        return runner.waitForElement('#new-todo,.new-todo').then(function (element) {
            element.focus();
            return {
                newTodo: element,
                views: contentWindow.Ember.View.views,
                emberRun: contentWindow.Ember.run
            }
        });
    },
    tests: [
        new BenchmarkTestStep('Adding' + numberOfItemsToAdd + 'Items', function (params, contentWindow) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
                params.emberRun(function () { params.views["new-todo"].set('value', 'Something to do' + i); });
                params.emberRun(function () {
                    var keyupEvent = document.createEvent('Event');
                    keyupEvent.initEvent('keyup', true, true);
                    keyupEvent.keyCode = 13;
                    params.newTodo.dispatchEvent(keyupEvent)
                });
            }
        }),
        new BenchmarkTestStep('CompletingAllItems', function (params, contentWindow, contentDocument) {
            var checkboxes = contentDocument.querySelectorAll('.ember-checkbox');
            for (var i = 0; i < checkboxes.length; i++) {
                var view = params.views[checkboxes[i].id];
                params.emberRun(function () { view.set('checked', true); });
            }
        }),
        new BenchmarkTestStep('DeletingItems', function (params, contentWindow, contentDocument) {
            var deleteButtons = contentDocument.querySelectorAll('.destroy');
            for (var i = 0; i < deleteButtons.length; i++)
                params.emberRun(function () { deleteButtons[i].click(); });
        }),
        new BenchmarkTestStep('Clean', function (newTodo, contentWindow, contentDocument) {
          window.localStorage.clear();
        })
    ]
});

Suites.push({
    name: 'Angular',
    url: 'todomvc/typescript-angular/index.html',
    version: '1.2.14',
    prepare: function (runner, contentWindow, contentDocument) {
        return runner.waitForElement('#new-todo,.new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('Adding' + numberOfItemsToAdd + 'Items', function (newTodo, contentWindow, contentDocument) {
            var submitEvent = document.createEvent('Event');
            submitEvent.initEvent('submit', true, true);
            for (var i = 0; i < numberOfItemsToAdd; i++) {
                var inputEvent = document.createEvent('Event');
                inputEvent.initEvent('input', true, true);
                newTodo.value = 'Something to do ' + i;
                newTodo.dispatchEvent(inputEvent);
                newTodo.form.dispatchEvent(submitEvent);
            }
        }),
        new BenchmarkTestStep('CompletingAllItems', function (newTodo, contentWindow, contentDocument) {
            var checkboxes = contentDocument.querySelectorAll('.toggle');
            for (var i = 0; i < checkboxes.length; i++)
                checkboxes[i].click();
        }),
        new BenchmarkTestStep('DeletingAllItems', function (newTodo, contentWindow, contentDocument) {
            var deleteButtons = contentDocument.querySelectorAll('.destroy');
            for (var i = 0; i < deleteButtons.length; i++)
                deleteButtons[i].click();
        }),
        new BenchmarkTestStep('Clean', function (newTodo, contentWindow, contentDocument) {
          window.localStorage.clear();
        })
    ]
});


Suites.push({
    name: 'Vanilla JS',
    url: 'todomvc/vanillajs/index.html',
    version: '0.2.0',
    prepare: function (runner, contentWindow, contentDocument) {
        return runner.waitForElement('#new-todo,.new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('Adding' + numberOfItemsToAdd + 'Items', function (newTodo, contentWindow, contentDocument) {
          for (var i = 0; i < numberOfItemsToAdd; i++) {
              var evt = document.createEvent("HTMLEvents");
              evt.initEvent("change", true, true );
              newTodo.value = 'Something to do ' + i;
              newTodo.dispatchEvent(evt);
          }
        }),
        new BenchmarkTestStep('CompletingAllItems', function (newTodo, contentWindow, contentDocument) {
            var checkboxes = contentDocument.querySelectorAll('.toggle');
            for (var i = 0; i < checkboxes.length; i++)
                checkboxes[i].click();
        }),
        new BenchmarkTestStep('DeletingAllItems', function (newTodo, contentWindow, contentDocument) {
            var deleteButtons = contentDocument.querySelectorAll('.destroy');
            for (var i = 0; i < deleteButtons.length; i++)
                deleteButtons[i].click();
        }),
        new BenchmarkTestStep('Clean', function (newTodo, contentWindow, contentDocument) {
          window.localStorage.clear();
        })
    ]
});
