<script>
    import { onMount, onDestroy } from 'svelte';
    import { scaleLinear, scaleOrdinal } from 'd3-scale';
    import { zoom, zoomIdentity } from 'd3-zoom';
    import { schemeCategory10 } from 'd3-scale-chromatic';
    import { select, selectAll } from 'd3-selection';
    import { drag } from 'd3-drag';
    import { forceSimulation, forceLink, forceManyBody, forceCenter } from 'd3-force';
    
    export let graph;
    let updateCounter = 0;

    let d3 = { zoom, zoomIdentity, scaleLinear, scaleOrdinal, schemeCategory10, select, selectAll, drag,  forceSimulation, forceLink, forceManyBody, forceCenter }
    
    let innerWidth, innerHeight, width, height;
    const nodeRadius = 5;
    $: links = graph.links.map(d => Object.create(d));
    $: nodes = graph.nodes.map(d => Object.create(d));  
    $: associations = graph.nodes.reduce((acc, curr) => {
        const x = acc.find(d => d.association === curr.association);
        if (!x) {
            return acc.concat([{'association': curr.association, 'color': curr.color}]);
        } else {
            return acc;
        }
    }, []);  
    let simulation, svg;

    const tooltip = d3.select('body').append('div')	
        .attr('class', 'tooltip')
        .style('left', '0px')		
        .style('top', '0px')			
        .style('opacity', 0);

    function updateGraph() {
        updateCounter += 1;
        simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links).id(d => d.id))
            .force('charge', d3.forceManyBody())
            .force('center', d3.forceCenter(width / 2, height / 2 - 50))
            .on('tick', simulationUpdate);
        svg = d3.select('.chart')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
  
        const g = svg.append('g');    

        const link = g.append('g')
            // .attr('stroke', '#999')
            .attr('stroke-opacity', 0.6)
            .selectAll('line')
            .data(links)
            .join('line')
            // .attr('stroke-width', d => Math.sqrt(d.value))
            .attr('stroke', d => d.source.color);

        const node = g.append('g')
            .selectAll('circle')
            .data(nodes)
            .join('circle')
            .attr('r', nodeRadius)
            .attr('fill', d => d.color)
            .on('mouseover', handleMouseOver)
            .on('mouseout', handleMouseOut);
        node.append('title')
            .text(d => d.name);

        const legendDot = g.append('g')
            .selectAll('circle')
            .data(associations)
            .join('circle')
            .attr('cx', 40)
            .attr('cy', (d, i) => 100 + i * 25)
            .attr('r', nodeRadius)
            .attr('fill', d => d.color);
        
        const legendText = g.append('g')
            .selectAll('text')
            .data(associations)
            .join('text')
            .text(d => d.association)
            .attr('x', 60)
            .attr('y', (d, i) => 100 + i * 25)
            .attr('fill', d => d.color)
            .attr('text-anchor', 'left')
            .style('alignment-baseline', 'middle');

        svg.call(d3.zoom()
                .extent([[0, 0], [width, height]])
                .scaleExtent([1 / 10, 8])
                .on('zoom', zoomed));
            
        function simulationUpdate () {
            // link
            //     .attr('x1', d => d.source.x)
            //     .attr('y1', d => d.source.y)
            //     .attr('x2', d => d.target.x)
            //     .attr('y2', d => d.target.y)
            node
                .attr('cx', d => d.x)
                .attr('cy', d => d.y)
            }
    
        function zoomed(currentEvent) {
            g.attr('transform', currentEvent.transform)
            simulationUpdate();
        }
    }

    onDestroy(() => {
        svg.remove();
    });

    onMount(() => {
        width = innerWidth;
        height = innerHeight - 68;
        updateGraph();
    });

    $: if (updateCounter >= 1) {
        graph;
        svg && svg.remove();
        updateGraph();
    }

    function handleMouseOver(e, d, i) {
        tooltip.transition()		
                .duration(200)		
                .style('opacity', .9);		
        tooltip	
            .html(d.name + '<br/>'  + d.association)	
            .style('left', (e.pageX) + 'px')		
            .style('top', (e.pageY - 28) + 'px');				
    }

    function handleMouseOut(e, d, i) {
        tooltip.transition()		
            .duration(500)		
            .style('opacity', 0);				
    }
</script>

<svelte:window bind:innerWidth={innerWidth} bind:innerHeight={innerHeight}/>
