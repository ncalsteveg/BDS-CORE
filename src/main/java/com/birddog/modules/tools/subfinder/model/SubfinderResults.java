package com.birddog.modules.tools.subfinder.model;

import com.birddog.modules.core.model.BirdDogCommandStatus;

import java.util.List;
import java.util.Map;

public class SubfinderResults {
    private final Map<String, List<SubfinderSubDomain>> results;
    private final Map<String, BirdDogCommandStatus> statuses;

    public SubfinderResults(Map<String, List<SubfinderSubDomain>> results, Map<String, BirdDogCommandStatus> statuses) {
        this.results = results;
        this.statuses = statuses;
    }

    public Map<String, List<SubfinderSubDomain>> getResults() {
        return results;
    }

    public Map<String, BirdDogCommandStatus> getStatuses() {
        return statuses;
    }
}
