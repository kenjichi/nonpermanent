import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Blaze from "meteor/gadicc:blaze-react-component";
import { Template } from "meteor/templating";
import { registerComponent } from "/imports/plugins/core/layout/lib/components";

class CoreLayoutNonpermanent extends Component {
  static propTypes = {
    actionViewIsOpen: PropTypes.bool,
    data: PropTypes.object,
    structure: PropTypes.object
  }

  render() {
    const { layoutHeader, layoutFooter, template } = this.props.structure || {};
    const pageClassName = classnames({
      "page": true,
      "show-settings": this.props.actionViewIsOpen
    });

    return (
      <div className={pageClassName} id="reactionAppContainer">
        { Template[layoutHeader] &&
          <Blaze template={layoutHeader} className="reaction-navigation-header" />
        }

        <Blaze template="cartDrawer" className="reaction-cart-drawer" />

        { Template[template] &&
          <main>
            <div className="rui nonperm">
              <div className="bkdebug"><em>{"Nonpermanent layout"}</em></div>
              <div className="bkdebug"><em>{"layoutHeader template:"}</em> {this.props.structure.layoutHeader}</div>
              <div className="bkdebug"><em>{"layoutFooter template:"}</em> {this.props.structure.layoutFooter}</div>
              <div className="bkdebug"><em>{"Main Template:"}</em> {this.props.structure.template}</div>
            </div>
            <Blaze template={template} />
          </main>
        }

        { Template[layoutFooter] &&
          <Blaze template={layoutFooter} className="reaction-navigation-footer footer-default" />
        }
      </div>
    );
  }
}

// Register component for it to be usable
registerComponent({
  name: "coreLayoutNonpermanent",
  component: CoreLayoutNonpermanent
});

export default CoreLayoutNonpermanent;
