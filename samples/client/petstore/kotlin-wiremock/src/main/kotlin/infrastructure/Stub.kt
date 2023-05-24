package .internal

import com.github.tomakehurst.wiremock.client.WireMock

class Stub(baseUrl: String, port: Int) {

    protected val wiremock = WireMock(baseUrl, port)
}