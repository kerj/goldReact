import React from 'react'
import { Button } from '../components/Button'

export const startGame = (store, newName) => {
	const name = newName;
	const game = true;
	store.setState({ name, game });
}

export const createGame = (store) => {
	let gameBucket = [];

	for (let i = 0; i < store.state.gameSize; i++) {
		const tile = <Button
			onClick={() => checkSquare(i, store)}
			disabled={false}
			id={gameBucket.length}
		/>
		gameBucket.push(tile)
	}
	localStorage.setItem('disabledCount', 0)
	return store.state.playerLose ?  store.setState({
		gameBoard: gameBucket,
		playerLose: false,
		playerWin: false,
		playerGold: 0,
	}) : store.setState({
		gameBoard: gameBucket,
		playerLose: false,
		playerWin: false,
	});
}

const isTnt = (ind, value) => {
	const tnt = ind === value ? true : false;
	return tnt
}

const isGold = (ind, value) => {
	const gold = ind === value ? true : false;
	return gold
}

const disableSquare = (ind, store) => {
	if(document.getElementById(ind).disabled) return;
	document.getElementById(ind).setAttribute('disabled', true);
	const disabledSquares = localStorage.getItem('disabledCount') || 0;
	localStorage.setItem('disabledCount', parseInt(disabledSquares) + 1)
}

//each button gets this func passed to it as onclick
const checkSquare = (click, store) => {
	if (document.getElementById(click).getAttribute('item')) {
		let item = Math.floor(Math.random() * 100)
		return item >= 50 ? struckGold(store, click) : blewUp(store);
	}
	let isItemValue = Math.floor(Math.random() * 100)
	const gold = isGold(click, isItemValue)

	isItemValue = Math.floor(Math.random() * 100)
	const tnt = isTnt(click, isItemValue)

	tnt ? blewUp(store) : gold ? struckGold(store, click) : disableSquare(click, store);

	isItemValue = Math.floor(Math.random() * 100)
	checkAround(click, isItemValue, store)
}

const isItem = (ind, isItemValue) => {
	if (document.getElementById(ind).getAttribute('item')) return;
	let temp;
	for (let i = 0; i < 8; i++) {
		temp = ind === isItemValue ? true : false;
		isItemValue = Math.floor(Math.random() * 100)
		if (temp) {
			document.getElementById(ind).setAttribute('item', true)
			return temp;
		}
	}
	return temp
}

const checkAround = (ind, isItemValue, store) => {
	//if ends in 0 or 9.... % 10 = 0 || 9
	const surronding = [
		ind + -1,
		ind + -11,
		ind + -10,
		ind + -9,
		ind + 1,
		ind + 11,
		ind + 10,
		ind + 9,
	]

	surronding.forEach((c) => {
		if (c >= 0 && c < 100) {
			if (document.getElementById(c).getAttribute('item')) {
				return;
			}
			if (c % 10 !== 0 && c % 10 !== 9) {
				if (isItem(c, isItemValue) === true) return
				//incement disabled count
				return disableSquare(c, store)
			} else {
				//checks for when edges are clicked and wont de-activate boxes on the otherside of the map
				if ((c % 10 === 0 && ind % 10 === 0) || (ind % 10 === 1)) {
					//incement disabled count
					disableSquare(c, store)
				} else if ((c % 10 === 9 && ind % 10 === 9) || (ind % 10 === 8)) {
			 		//incement disabled count
					disableSquare(c, store)
				}
			}
		}
	})
}


export const viewedRules = (store) => {
	const rules = true;
	return store.setState({ rules });
}

export const struckGold = (store, ind) => {
	document.getElementById(ind).setAttribute('mode', 'gold')
	const playerGold = store.state.playerGold + 1;
	return playerGold >= 3 ? store.setState({ playerWin: true, playerGold }) : store.setState({ playerGold })
}

export const blewUp = (store) => {
	const playerLose = true;
	return store.setState({ playerLose });
}

const clearedTiles = (store) => {
	const tilesCleared = true;
	return store.setState({ tilesCleared });
}
