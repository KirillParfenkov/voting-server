import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import {List, Map} from 'immutable';

chai.use(chaiImmutable);

describe('immutability', () => {

	describe('A tree', () => {

		function addMovice(currentState, movie) {
			return currentState.update('movies', movies => movies.push(movie));
		}

		it('is immutable', () => {
			let state = Map({
				movies: List.of('Trainspotting', '28 Days Later')
			});

			let nextState = addMovice(state, 'Sunshine');

		    chai.expect(nextState).to.equal(Map({
		        movies: List.of(
		          'Trainspotting',
		          '28 Days Later',
		          'Sunshine'
		        )
		    }));
		    chai.expect(state).to.equal(Map({
		        movies: List.of(
		          'Trainspotting',
		          '28 Days Later'
		        )
		    }));
		});
	});
});