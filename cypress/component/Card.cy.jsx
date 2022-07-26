import { Card } from '../../src/components/Card';

describe('<Card>', () => {
	beforeEach(() => {
		cy.mount(<Card />);
	});

	it('expects to see the followers, following and user repositories', () => {
		cy.get('.card__details div')
			.should('not.be.empty')
			.and(($card) => {
				expect($card).to.have.length(3);
				expect($card.first()).to.contain('followers');
				expect($card.last()).to.contain('repositories');
			});
	});
});
