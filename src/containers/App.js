import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const HIRAGANA = ['あ','い','う','え','お','か','き','く','け','こ','さ','し','す','せ','そ','た','ち','つ','て','と','な','に','ぬ','ね','の','は','ひ','ふ','へ','ほ','ま','み','む','め','も','や','ゆ','よ','ら','り','る','れ','ろ','わ','を','ん'];
const KATAKANA = ['ア','イ','ウ','エ','オ','カ','キ','ク','ケ','コ','サ','シ','ス','セ','ソ','タ','チ','ツ','テ','ト','ナ','ニ','ヌ','ネ','ノ','ハ','ヒ','フ','ヘ','ホ','マ','ミ','ム','メ','モ','ヤ','ユ','ヨ','ラ','リ','ル','レ','ロ','ワ','ヲ','ン'];
const ROMANIZATION = ['a','i','u','e','o','ka','ki','ku','ke','ko','sa','shi','su','se','so','ta','chi','tsu','te','to','na','ni','nu','ne','no','ha','hi','fu','he','ho','ma','mi','mu','me','mo','ya','yu','yo','ra','ri','ru','re','ro','wa','wo','n'];

class App extends Component {
  static propTypes = {
  };

  state = {
    type: 'hiragana',
    answer: this.getAnswer(),
    showHint: false
  }

  updateType(type){
    this.setState({
      type: type,
      answer: this.getAnswer(),
      showHint: false
    })
  }

  onAnswerKeyDown(word, hint, e){
    if (e.keyCode === 13) {
      if(e.target.value === word || e.target.value === hint ) {
        this.setState({
          answer: this.getAnswer(),
          showHint: false
        })
        e.target.value = '';
      }else{
        this.setState({
          showHint: true
        })
      }
    }
  }

  getAnswer(){
    return Math.floor(Math.random()*HIRAGANA.length);
  }

  render() {

    let word = this.state.type === 'hiragana' ? HIRAGANA[this.state.answer] : KATAKANA[this.state.answer];
    let hint = ROMANIZATION[this.state.answer];

    return (
      <div>
        <div id='typeContainer'>
          <div
            style={{background: this.state.type === 'hiragana' ? '#bebed2' : ''}}
            onClick={this.updateType.bind(this, 'hiragana')}>Hiragana</div>
          <div
            style={{background: this.state.type === 'katakana' ? '#bebed2' : ''}}
            onClick={this.updateType.bind(this, 'katakana')}>Katakana</div>
        </div>
        <div id='wordContainer'>
          <span id='word'>{word}</span>
          <span
            id='hint'
            style={{display: this.state.showHint ? '' : 'none'}}>{hint}</span>
        </div>
        <div id='inputContainer'>
          <input
            autoFocus
            id='answer'
            onKeyDown={this.onAnswerKeyDown.bind(this, word, hint)}/>
        </div>
        <div id='hiragana'>Enter the correct Hiragana or it's Romanization!</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
