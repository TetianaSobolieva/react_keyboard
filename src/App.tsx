import React from 'react';

type State = {
  pressKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressKey: null,
  };

  handleKeyboardEvent = (event: KeyboardEvent) => {
    this.setState({ pressKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyboardEvent);
  }

  componentWillUnmount(): void {
    document.addEventListener('keyup', this.handleKeyboardEvent);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressKey
            ? `The last pressed key is [${this.state.pressKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
