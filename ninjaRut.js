/******************
MIT License

Copyright (c) 2016 Fernando Silva Müller (@fdograph)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Chilean RUT validator written in VanillaJS
******************/
(function(window, document){
	"use strict";

	var NinjaRut = function( protoRut ){
		this.protoRut = protoRut;
		this.cleanRut = this.clean();
		this.process();
		return this;
	};
	NinjaRut.prototype = {
		clean : function(){
			var allowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'k'];

			// clean the proto rut by removing forbidden characters
			var clean = Array.prototype.map.call(this.protoRut.toLowerCase(), function(c){ return c; });
			clean = clean.filter(function( c ){
				return allowed.indexOf(c) !== -1;
			});

			return clean.join('');
		},

		process : function(){
			this.number = this.cleanRut.substring(0, this.cleanRut.length - 1);
			this.digit = this.cleanRut.charAt(this.cleanRut.length - 1);
			this.isValid = this.validate();
		},

		getDigit : function(){
			var sum = 0,
				mul = 2,
				res;

			var i = this.number.length;

			while( i-- ){
				sum = sum + parseInt(this.number.charAt(i)) * mul;
				if( mul % 7 === 0 ){ mul = 2; }
				else { mul++; }
			}

			res = sum % 11;
			if( res === 0 ){ return '0'; }
			else if( res === 1 ){ return 'k'; }
			else { return 11 - res; }
		},

		validate : function(){
			// if too short
			if( this.cleanRut.length < 6 ){ 
				return false;
			}

			// if impossible ruts(but valid tho)
			// Eg: 11111111-1
			if( this.cleanRut.match(/(\d)\1{7,9}/) ){
				return false;
			}

			// math validation
			if( this.digit != this.getDigit() ){
				return false;
			}

			return true;
		},

		format : function( dots ){
			var formatedNum = dots ? this.number.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") : this.number;
			return formatedNum + '-' + this.digit;
		}
	};

	window.NinjaRut = NinjaRut;
}(window, document));