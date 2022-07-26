import { Footer } from '../../src/components/Footer';

describe('<Footer>', () => {
	beforeEach(() => {
		cy.mount(<Footer />);
	});

	it('mounts', () => {
		cy.get('.footer a')
			.should('not.be.empty')
			.and(($card) => {
				expect($card).to.have.length(5);
				expect($card.first()).to.contain('reactjs');
				expect($card.last()).to.contain('material-UI-icon');
			});
	});
});
