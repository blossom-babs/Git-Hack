import { Header } from '../../src/components/Header';

describe('<Header>', () => {
	it('mounts', () => {
		cy.mount(<Header />);
		cy.contains('GitHack');
		cy.get('header').should('be.visible');
	});
});
