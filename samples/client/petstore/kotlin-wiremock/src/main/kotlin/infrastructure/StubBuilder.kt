package .internal

import com.github.tomakehurst.wiremock.client.*
import com.github.tomakehurst.wiremock.client.WireMock.*

abstract class StubBuilder(protected val wiremock: WireMock, protected val builder: MappingBuilder {

    fun status(code: Int) {
        wiremock.register(stub.willReturn(WireMock.status(code)))
    }

    /**
     * Register the stub in WireMock responding with [response].
     *
     * @param [response] The response WireMock will respond with.
     */
    fun register(response: ResponseDefinitionBuilder) {
        wiremock.register(stub.willReturn(builder))
    }
}