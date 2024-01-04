/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as MinaeFerntest3ImdbApi from "../../../../api";
import * as core from "../../../../core";
export declare const UpdateMovieRequest: core.serialization.ObjectSchema<serializers.UpdateMovieRequest.Raw, MinaeFerntest3ImdbApi.UpdateMovieRequest>;
export declare namespace UpdateMovieRequest {
    interface Raw {
        title?: string | null;
        rating?: number | null;
        year?: string | null;
    }
}