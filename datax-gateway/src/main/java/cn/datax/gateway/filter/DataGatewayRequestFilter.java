package cn.datax.gateway.filter;

import cn.datax.common.core.DataConstant;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.cloud.gateway.route.Route;
import org.springframework.core.annotation.Order;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.util.Base64Utils;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.LinkedHashSet;

import static org.springframework.cloud.gateway.support.ServerWebExchangeUtils.*;

@Slf4j
@Component
@Order(0)
public class DataGatewayRequestFilter implements GlobalFilter {

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        // 首先获取了当前的请求和响应对象，然后调用了printLog方法打印了一些日志信息。
        ServerHttpRequest request = exchange.getRequest();
        ServerHttpResponse response = exchange.getResponse();
        printLog(exchange);
        // 通过Base64Utils工具类对TOKENVALUE进行了Base64编码，然后将编码后的值放入了请求头中。
        byte[] token = Base64Utils.encode((DataConstant.Security.TOKENVALUE.getVal()).getBytes());
        String[] headerValues = { new String(token) };
        // 将TOKENHEADER和编码后的TOKENVALUE放入请求头中
        ServerHttpRequest build = request.mutate().header(DataConstant.Security.TOKENHEADER.getVal(), headerValues).build();
        // 将新的请求对象放入exchange中
        ServerWebExchange newExchange = exchange.mutate().request(build).build();
        return chain.filter(newExchange);
    }

    private void printLog(ServerWebExchange exchange) {
        // 通过exchange对象获取了请求的URL、路由信息和原始请求URL，然后打印了一些日志信息。
        URI url = exchange.getAttribute(GATEWAY_REQUEST_URL_ATTR);
        Route route = exchange.getAttribute(GATEWAY_ROUTE_ATTR);
        LinkedHashSet<URI> uris = exchange.getAttribute(GATEWAY_ORIGINAL_REQUEST_URL_ATTR);
        URI originUri = null;
        if (uris != null) {
            originUri = uris.stream().findFirst().orElse(null);
        }
        if (url != null && route != null && originUri != null) {
            log.info("转发请求：{}://{}{} --> 目标服务：{}，目标地址：{}://{}{}，转发时间：{}",
                    originUri.getScheme(), originUri.getAuthority(), originUri.getPath(),
                    route.getId(), url.getScheme(), url.getAuthority(), url.getPath(), LocalDateTime.now()
            );
        }
    }
}
