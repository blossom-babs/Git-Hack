import { Form } from '../../src/components/Form';

describe('<Form>', () => {
	beforeEach(() => {
		cy.mount(<Form />);
	});

	const formInput = '[data-cy="formInput"]';

	it('mounts', () => {
		cy.contains('Search');
		cy.get(formInput)
			.invoke('attr', 'placeholder')
			.should('contains', 'Type username e.g blossom-babs');
	});

	it('sends the data to github api when the button is clicked', () => {
		cy.get(formInput).type('blossom-babs').should('have.value', 'blossom-babs');
		cy.contains('Search').click();
	});
});
