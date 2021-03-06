import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { CivicStoryCard, Scatterplot } from "@hackoregon/component-library";

import { civicFormat } from "@hackoregon/component-library/dist/utils";

import { fetchProactivePlanning } from "../../state/proactive-planning/actions";
import {
  isProactivePlanningPending,
  catchProactivePlanningErrors,
  getProactivePlanningData
} from "../../state/proactive-planning/selectors";

export class ProactivePlanning extends React.Component {
  componentDidMount() {
    const { init } = this.props;
    init();
  }

  render() {
    const { isLoading, error, proactivePlanning } = this.props;

    return (
      <CivicStoryCard
        title="Planning for Citywide Resilience"
        slug="proactive-planning-for-city-wide-resilience"
        loading={isLoading}
        error={error && "Error loading data"}
      >
        {proactivePlanning && (
          <Scatterplot
            title="Resilience and Displacement"
            subtitle="Resilience as measured by census non-response rate and expected displacement in a 9.0 earthquake by neighborhood"
            data={proactivePlanning}
            xLabel="Census Non-Response Rate"
            yLabel="Per Capita Displacement"
            dataKey="census_response_rate"
            dataKeyLabel="resilienceLabel"
            dataValue="displaced_percap"
            dataValueLabel="displacementLabel"
            dataSeries="quadrant"
            size={{ key: "total_population", minSize: 2, maxSize: 10 }}
            xNumberFormatter={civicFormat.percentage}
            yNumberFormatter={civicFormat.percentage}
          />
        )}
      </CivicStoryCard>
    );
  }
}
ProactivePlanning.displayName = "proactivePlanning";
ProactivePlanning.propTypes = {
  init: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.shape({}),
  proactivePlanning: PropTypes.arrayOf(PropTypes.object)
};

export default connect(
  state => ({
    isLoading: isProactivePlanningPending(state),
    error: catchProactivePlanningErrors(state),
    proactivePlanning: getProactivePlanningData(state)
  }),
  dispatch => ({
    init() {
      dispatch(fetchProactivePlanning());
    }
  })
)(ProactivePlanning);
