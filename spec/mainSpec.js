const { test } = QUnit;

QUnit.module('DOM', (hooks) => {
	hooks.beforeEach(() => {
		document.body.insertAdjacentHTML('afterbegin', getBodyContent());
	});

	hooks.afterEach(() => {
		document.body.removeChild(document.getElementById('wrapper'));
	});

	test('should have a number type of each card list image width and height attribute values', (assert) => {
		const cardImgEls = document.querySelectorAll('.card__image img');

		for (let i = 0; i < cardImgEls.length; i++) {
			const cardImgEl = cardImgEls[i];
			const cardImgWidth = parseInt(cardImgEl.getAttribute('width'));
			const cardImgHeight = parseInt(cardImgEl.getAttribute('height'));

			assert.equal(typeof cardImgWidth, 'number');
			assert.equal(typeof cardImgHeight, 'number');
		}
	});

	test("should have a title element that equals 'Reliable, efficient delivery'", (assert) => {
		const cardsSummaryTitleEl = document.querySelector(
			'.cards-summary__title'
		);
		const cardsSummaryTitle = cardsSummaryTitleEl.textContent.trim();

		assert.equal(cardsSummaryTitle, 'Reliable, efficient delivery');
	});

	test('should have two children inside of the section element', (assert) => {
		const sectionEl = document.querySelector('section');
		const sectionChildrenEls = sectionEl.children;

		assert.strictEqual(sectionChildrenEls.length, 2);
	});

	test('should have an empty alt attribute value of each card list item image element', (assert) => {
		const cardListItemImgEls =
			document.querySelectorAll('.card__image img');

		for (let i = 0; i < cardListItemImgEls.length; i++) {
			const cardListItemImgAlt = cardListItemImgEls[i].alt;

			assert.equal(cardListItemImgAlt, '');
		}
	});
});
