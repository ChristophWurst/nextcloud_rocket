/* global Backbone */

/**
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

(function(OCA, $, Backbone) {
	'use strict';

	OCA.Rocket = OCA.Rocket || {};
	OCA.Rocket.Views = OCA.Rocket.Views || {};

	/**
	 * @class OCA.Rocket.Views.RocketView
	 */
	OCA.Rocket.Views.RocketView = Backbone.View.extend({

		events: {
			'click button.launch': '_launch'
		},

		/**
		 * @private
		 * @returns {undefined}
		 */
		_launch: function() {
			// Launch your rocket
			console.info('🚀');
		}
	});

})(OCA, $, Backbone);