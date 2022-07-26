import { Footer } from '../../src/components/Footer';

describe('<Footer>', () => {
	it('mounts', () => {
		cy.mount(<Footer />);
		cy.get('.footer a')
			.should('not.be.empty')
			.and(($card) => {
				expect($card).to.have.length(5);
				expect($card.first()).to.contain('reactjs');
				expect($card.last()).to.contain('material-UI-icon');
			});
	});
});
