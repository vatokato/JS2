$(function() {
	APP.init();
	Cat.init({name:'Степка', weight:2});
});

var APP = (function($){
	return {
		init : function () {
			console.log();
		}

	}
}(jQuery));


var Cat = (function($,_){
	var mod = {
		options : {
			name: 'Вася',
			eye: 'green',
			weight: 5
		},
		tmpl : {
			name :      _.template('<div>меня зовут <%= name %></div>'),
			weight :    _.template('<div>мой вес  <%= weight %> килограммов, я <%= text %>!</div>')
		}
	};

	function check_weight () {
		return mod.options.weight > 3 ? 'жирный и убогий' : 'резвый и здоровый';
	}

	function show () {
		$('body').html( mod.tmpl.name({name : mod.options.name}) );
		$('body').append(
			mod.tmpl.weight({
				weight : mod.options.weight,
				text : check_weight()
			})
		);
	}

	mod.init = function (options) {
		$.extend(mod.options, options);
		show();

	}
	return mod;
}(jQuery,_));




