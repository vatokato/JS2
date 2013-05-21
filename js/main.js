$(function() {
	APP.init();
	Animal.init({
		name:'Степка',
		weight:2,
		success : function () {
			console.log('##############');
			console.log(this);
			console.log('##############');
		}
	});

	Animal.init({
		name:'Васька'
	});

	Animal.init({
		name:'Тузик'
	});



});

var APP = (function($){
	return {
		init : function () {
			console.log();
		}

	}
}(jQuery));


var Animal = (function($,_){
	"use strict";
	var MOD = {},
		_defaults = {
			name: 'Вася',
			eye: 'green',
			weight: 5,
			success : function () {

			}
		},
		_tmpl = {
			name :      _.template('<div>меня зовут <%= name %></div>'),
			weight :    _.template('<div>мой вес  <%= weight %> килограммов, я <%= text %>!</div>')
		};


	function check_weight () {
		return MOD.weight > 3 ? 'жирный и убогий' : 'резвый и здоровый';
	}

	function show () {
		$('body').append( '<hr/>' );
		$('body').append( _tmpl.name({name : MOD.name}) );
		$('body').append(
			_tmpl.weight({
				weight : MOD.weight,
				text : check_weight()
			})
		);
		MOD.success();
	}

	MOD.init = function (options) {
		$.extend(MOD, _defaults, options);
		show();
	}
	MOD.get_name = function () {
		console.log('my name: '+MOD.name);
	}

	return MOD;
}(jQuery, _));





