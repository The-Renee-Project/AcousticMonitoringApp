import {
    TaskGraph,
    EventListenerGenerator,
    RunnableTaskDescriptor,
} from "nativescript-task-dispatcher/tasks/graph";

export class DemoTaskGraph implements TaskGraph {
    private freq: number
    constructor(num){
        this.freq = num;
    }
    async describe(
        on: EventListenerGenerator,
        run: RunnableTaskDescriptor
    ): Promise<void> {
        on(
            "startEvent",run("record").every(this.freq, "minutes").cancelOn("stopEvent")
        );
        on(
            "startEvent",run("logToFile").every(1, "minutes").cancelOn("stopEvent")
        );
        on(
            "startEvent",run("birdNet").every(1440, "minutes").cancelOn("stopEvent")
        );
    }
}
//export const demoTaskGraph = new DemoTaskGraph();
