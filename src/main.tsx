import * as React from "react";
import { render } from "react-dom";
import { observable, computed } from "mobx";
import { observer } from "mobx-react";

class User {
  @observable firstName = "First";
  @observable lastName = "Last";
  @computed get fullName() { return `${this.firstName} ${this.lastName}`; }
}

@observer
class Start extends React.Component<{ user: User }, any> {
  public render() {
    let user = this.props.user;
    return (
      <div>
        <div>{user.fullName}</div>
        <div>
          <input 
            value={user.firstName} 
            onInput={e => user.firstName = (e.target as HTMLInputElement).value} />
        </div>
        <div>
          <input 
            value={user.lastName} 
            onInput={e => user.lastName = (e.target as HTMLInputElement).value} />
        </div>
      </div>
    );
  }
}

window.onload = () => {
  render(<Start user={new User()} />, document.getElementById("app"));
};
