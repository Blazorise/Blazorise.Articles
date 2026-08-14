---
title: Integrate IGN Maps (France) into Blazorise.Map component
description: How fetch data from IGN (Institut national de l'information géographique et forestière) and integrate it into Blazorise.Map component.
permalink: /blog/ignmaps
canonical: /blog/ignmaps
image-url: img/ignmaps.png
image-title: img/IgnMaps-Title.jpg
author-name: Christophe Gerbier
author-image: img/mbn_logo.png
category: Community
posted-on: 2026-08-13
read-time: 15 min
pinned: false
---

# Integration of french IGN Maps into Blazorise.Map component

This article provides a quick guide to integrating IGN (National Institute of Geographic and Forest Information) base maps into Blazorise Map components.
The service also provides a geocoding service to convert addresses into geographic coordinates (latitude/longitude). We can also use this service to center the map on a given address.

## A Quick Overview of the IGN Service

The IGN provides base maps, orthophotos, and thematic datasets accessible via web services (WMTS, WMS, geocoding). These services allow users to:

- display multi-resolution base maps (maps, orthophotos),
- overlay thematic layers (parcels, waterways, infrastructure),
- perform geocoding (obtain coordinates from an address),
- control the display using tile parameters (TileMatrixSet) and image format settings.

## Retrieving an IGN tile

The process involves constructing a tile URL based on the desired IGN layer, the image format, and the tile grid (TileMatrixSet). Sending the request constructed in this way retrieves the image of the corresponding tile.

A request takes the following form: `https://data.geopf.fr/wmts?SERVICE=WMTS&amp;VERSION=1.0.0&amp;REQUEST=GetTile&amp;LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&amp;STYLE=normal&amp;FORMAT=image/png&amp;TILEMATRIXSET=PM_0_19&amp;TILEMATRIX={z}&amp;TILEROW={y}&amp;TILECOL={x}`

First, we will create a list of “reference” IGN tile layers—that is, those most commonly used for web applications. These layers are exposed by the `IgnLayers` enumeration.

The `GetIgnMap(IgnLayers layer)` method retrieves the tile URL corresponding to the requested IGN layer. 

```csharp
    private record IgnMapInfo(IgnLayers Layer, string LayerName, ImageFormats ImageFormat, TileMatrixSets TileMatrixSet, string Style = "normal");
    private static List<IgnMapInfo> IgnMapsList { get; } =
    [
        new(IgnLayers.PlanIgn,"GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2",ImageFormats.Png,TileMatrixSets.PM_0_19),
        new(IgnLayers.PhotosAeriennes,"ORTHOIMAGERY.ORTHOPHOTOS",ImageFormats.Jpeg,TileMatrixSets.PM_0_19),
        new(IgnLayers.ParcellesCadastrales,"CADASTRALPARCELS.PARCELLAIRE_EXPRESS",ImageFormats.Png,TileMatrixSets.PM_0_19),
        new(IgnLayers.Hydrographie,"HYDROGRAPHY.HYDROGRAPHY",ImageFormats.Png,TileMatrixSets.PM_6_18),
        new(IgnLayers.CartesScan1000,"IGNF_CARTES_SCAN-1000",ImageFormats.Jpeg,TileMatrixSets.PM_0_10, "SCAN1000"),
        new(IgnLayers.Haies,"IGNF_BD-HAIE-V1_2020",ImageFormats.Png,TileMatrixSets.PM_4_18),
        new(IgnLayers.LimitesAdministratives,"LIMITES_ADMINISTRATIVES_EXPRESS.LATEST",ImageFormats.Png,TileMatrixSets.PM_6_16),
        new(IgnLayers.Routes,"TRANSPORTNETWORKS.ROADS",ImageFormats.Png,TileMatrixSets.PM_6_18),
        new(IgnLayers.TransportsExceptionnels,"SECUROUTE.TE.1TE",ImageFormats.Png,TileMatrixSets.PM_7_17,"RESEAU ROUTIER 1TE"),
        new(IgnLayers.Altitude,"ELEVATION.SLOPES",ImageFormats.Jpeg,TileMatrixSets.PM_6_14),
        new(IgnLayers.ForetsPubliques,"FORETS.PUBLIQUES",ImageFormats.Png,TileMatrixSets.PM_3_16,"FORETS PUBLIQUES ONF"),
        new(IgnLayers.Sols,"INRA.CARTE.SOLS",ImageFormats.Png,TileMatrixSets.PM_6_16,"CARTE DES SOLS"),
        new(IgnLayers.Forets,"LANDCOVER.FORESTINVENTORY.V2",ImageFormats.Png,TileMatrixSets.PM_6_16),
        new(IgnLayers.RegistreParcellaireGraphique,"LANDUSE.AGRICULTURE.LATEST",ImageFormats.Png,TileMatrixSets.PM_6_16),
        new(IgnLayers.CoursEau,"HYDROGRAPHY.BCAE.2026",ImageFormats.Png,TileMatrixSets.PM_6_17),
        new(IgnLayers.HaiesLineraires,"hedge.hedge",ImageFormats.Png,TileMatrixSets.PM_7_18),
        new(IgnLayers.CourbesNiveau,"ELEVATION.CONTOUR.LINE",ImageFormats.Png,TileMatrixSets.PM_6_18),
        new(IgnLayers.SeuilsPentesAgriculture,"ELEVATION.ELEVATIONGRIDCOVERAGE.THRESHOLD",ImageFormats.Png,TileMatrixSets.PM_3_17, "ELEVATION.ELEVATIONGRIDCOVERAGE.THRESHOLD"),
        new(IgnLayers.Aeroports,"TRANSPORTNETWORKS.RUNWAYS",ImageFormats.Png,TileMatrixSets.PM_6_18)
    ];

    private static string GetIgnMapUrl(IgnMapInfo map) => $"{IgnServiceUrl}?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER={map.LayerName}&STYLE={map.Style}&FORMAT={(map.ImageFormat == ImageFormats.Png ? "image/png" : "image/jpeg")}&TILEMATRIXSET={map.TileMatrixSet}&TILEMATRIX={{z}}&TILEROW={{y}}&TILECOL={{x}}";

    // For maps in the IgnLayers enum
    public static string GetIgnMap(IgnLayers layer)
    {
        return GetIgnMapUrl(IgnMapsList.FirstOrDefault(m => m.Layer == layer)!);
    }

    // For custom maps not in the IgnLayers enum
    public static string GetIgnMap(string layer, ImageFormats imageFormat, TileMatrixSets tileMatrixSet, string style = "normal")
    {
        return $"{IgnServiceUrl}?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER={layer}&STYLE={style}&FORMAT={(imageFormat == ImageFormats.Png ? "image/png" : "image/jpeg")}&TILEMATRIXSET={tileMatrixSet}&TILEMATRIX={{z}}&TILEROW={{y}}&TILECOL={{x}}";
    }
```

The image format returned by the IGN API can be `image/png` or `image/jpeg`. In general, PNG tiles can be used as layers because of their transparency. JPEG tiles are often used only as basemaps.
The `TileMatrixSet` parameter defines the tile grid used for the layer (e.g., PM_0_19 for IGN maps, PM_6_18 for waterways). This information is specific to each IGN layer and is documented in the IGN API.

Here are the three enumerations that will be used for image formats, tile grids, and layer names:
```csharp
    public enum ImageFormats
    {
        Png,
        Jpeg
    }
```
```csharp
    public enum TileMatrixSets
    {
        PM_0_10,
        PM_0_18,
        PM_0_19,
        PM_3_16,
        PM_3_17,
        PM_4_18,
        PM_6_14,
        PM_6_16,
        PM_6_17,
        PM_6_18,
        PM_7_17,
        PM_7_18
    }
```
```csharp
    public enum IgnLayers
    {
        PlanIgn,
        PhotosAeriennes,
        ParcellesCadastrales,
        Hydrographie,
        CartesScan1000,
        Haies,
        HaiesLineraires,
        LimitesAdministratives,
        Routes,
        TransportsExceptionnels,
        Altitude,
        ForetsPubliques,
        Sols,
        Forets,
        RegistreParcellaireGraphique,
        CoursEau,
        CourbesNiveau,
        SeuilsPentesAgriculture,
        Aeroports
    }
```

## Examples of use

### 1) Predefined layers in the IgnLayers enum

![Plan IGN - Multiple layers](img/sample1.jpg)
![Parcelles cadastrales](img/cadastral.jpg)

```razor
@using static Cge.Blazorise.IgnMaps

<Map View="@view" Height="Height.Is100">
	<MapTileLayer Source="@GetIgnMap(IgnLayers.PlanIgn)"
				  Attribution="© IGN"
				  Opacity="1"
				  ZIndex="0" />
	<MapTileLayer Source="@GetIgnMap(IgnLayers.ParcellesCadastrales)"
				  Attribution="© IGN"
				  Opacity="0.85"
				  ZIndex="10" />
	<MapTileLayer Source="@GetIgnMap(IgnLayers.CoursEau)"
				  Attribution="© IGN"
				  Opacity="0.85"
				  ZIndex="20"/>
	<MapTileLayer Source="@GetIgnMap(IgnLayers.Aeroports)"
				  Attribution="© IGN"
				  Opacity="0.85"
				  ZIndex="30" />
</Map>
```

Explanation:
- `GetIgnMap(IgnLayers.xxx)` returns the URL template for the requested IGN layer.
- You can stack multiple `MapTileLayer` instances with different `ZIndex` values to build the map (background, intermediate layers, vector overlay layers).
- `Opacity` allows you to adjust a layer's visibility without changing its source.

### 2) Custom layer

![Couche thématique - Biomethane](img/biomethane.jpg)

```razor
<MapTileLayer Source="@GetIgnMap("ACCES.BIOMETHANE", ImageFormats.Png, TileMatrixSets.PM_6_16, "ACCES.BIOMETHANE")"
			  Attribution="© IGN"
			  Opacity="1.00"
			  ZIndex="0" />
```

Explanation:
- When the IGN layer is not in the `IgnLayers` enumeration, use the overload that accepts an explicit `layerId`, the image format, and the tile grid.
- This is useful for specific business layers exposed by the IGN API (e.g., thematic datasets).

### 3) Address to GPS coordinates : GetCoordinatesFromAddressAsync

The Blazorise Map component can be centered on a specific address given GPS latitude and longitude data. The IGN service also provides a geocoding API to resolve addresses into coordinates, so let's see how to use it.

The following method `GetCoordinatesFromAddressAsync` takes a free-form address string (e.g., "2 rue du coteau, 89113 charbuy", "68000", "Brest") and returns a list of coordinates (latitude / longitude). The list may contain multiple results; the first one is usually the most relevant.

The service has a dedicated zip code search endpoint, so if the input string is a 5-digit postal code (french style zip code), the method will use that endpoint to improve accuracy. Otherwise, it will use the general search endpoint.


```csharp
    private readonly HttpClient _http = http ?? throw new ArgumentNullException(nameof(http));
    private readonly JsonSerializerOptions _jsonOptions = new() { PropertyNameCaseInsensitive = true };

    // DTOs pour désérialisation de la réponse de api-adresse.data.gouv.fr
    internal class GeoResponse
    {
        public Feature[]? Features { get; set; }
    }

    internal class Feature
    {
        public Geometry? Geometry { get; set; }
    }

    internal class Geometry
    {
        public double[]? Coordinates { get; set; }
    }

public async Task<List<(double Latitude, double Longitude)>> GetCoordinatesFromAddressAsync(string adresse, int maxResults = 5, CancellationToken ct = default)
    {
        if (string.IsNullOrWhiteSpace(adresse) || maxResults <= 0)
        {
            return new List<(double Latitude, double Longitude)>();
        }

        ct.ThrowIfCancellationRequested();

        var trimmed = adresse.Trim().ToUpperInvariant();
        bool isPostalCode = trimmed.Length == 5 && trimmed.All(char.IsDigit);
        var relative = isPostalCode
            ? $"search/?q={Uri.EscapeDataString(trimmed)}&type=municipality"
            : $"search/?q={Uri.EscapeDataString(trimmed)}";

        using var response = await _http.GetAsync(relative, HttpCompletionOption.ResponseHeadersRead, ct).ConfigureAwait(false);

        if (!response.IsSuccessStatusCode)
        {
            return new List<(double Latitude, double Longitude)>();
        }

        ct.ThrowIfCancellationRequested();
        using var stream = await response.Content.ReadAsStreamAsync(ct).ConfigureAwait(false);
        ct.ThrowIfCancellationRequested();

        var geo = await JsonSerializer.DeserializeAsync<GeoResponse?>(stream, _jsonOptions, ct).ConfigureAwait(false);

        var result = new List<(double Latitude, double Longitude)>();

        if (geo?.Features is { Length: > 0 } features)
        {
            foreach (var f in features)
            {
                ct.ThrowIfCancellationRequested();
                var coords = f?.Geometry?.Coordinates;
                if (coords is { Length: >= 2 })
                {
                    // Retour de l'API : [longitude, latitude], Blazorise.MapCoordinate attend (latitude, longitude)
                    result.Add((Latitude: coords[1], Longitude: coords[0]));

                    if (result.Count >= maxResults)
                    {
                        break;
                    }
                }
            }
        }

        return result;
    }

public static class IgnMapsServiceCollectionExtensions
{
    public static IServiceCollection AddIgnMaps(this IServiceCollection services, Action<HttpClient>? configureClient = null)
    {
        services.AddHttpClient<IgnMaps>(client =>
        {
            client.BaseAddress = new Uri("https://api-adresse.data.gouv.fr/");
            client.Timeout = TimeSpan.FromSeconds(10);
            configureClient?.Invoke(client);
        });

        return services;
    }
}
```

## Usage in Blazor

First, we need to register the `IgnMaps` service in the DI container. In `Program.cs` (or `Startup.cs`), add:
```csharp
builder.Services.AddIgnMaps();
```

Then we can create the razor page :

```razor
@using static Cge.Blazorise.IgnMaps;
@page "/carte"

<PageTitle>Carte</PageTitle>

<Row Height="Height.Px(640)">
    <Column ColumnSize="ColumnSize.Is6">
        <Card Border="Border.Is2.Primary" Height="Height.Is100">
            <Map View="@view" Height="Height.Is100">
                <MapTileLayer Source="@GetIgnMap(IgnLayers.PlanIgn)"
                              Attribution="© IGN"
                              Opacity="1"
                              ZIndex="0" />
                <MapTileLayer Source="@GetIgnMap(IgnLayers.ParcellesCadastrales)"
                              Attribution="© IGN"
                              Opacity="0.85"
                              ZIndex="10" />
                <MapTileLayer Source="@GetIgnMap(IgnLayers.CoursEau)"
                              Attribution="© IGN"
                              Opacity="0.85"
                              ZIndex="20"/>
                <MapTileLayer Source="@GetIgnMap(IgnLayers.Aeroports)"
                              Attribution="© IGN"
                              Opacity="0.85"
                              ZIndex="30" />
            </Map>
        </Card>
    </Column>
    <Column ColumnSize="ColumnSize.Is6">
        <Card Border="Border.Is2.Primary" Height="Height.Is100">
            <Map View="@view" Height="Height.Is100">
                <MapTileLayer Source="@GetIgnMap(IgnLayers.PhotosAeriennes)"
                              Attribution="© IGN"
                              Opacity="1.00"
                              ZIndex="0" />
                <MapTileLayer Source="@GetIgnMap(IgnLayers.Aeroports)"
                              Attribution="© IGN"
                              Opacity="0.85"
                              ZIndex="10" />
            </Map>
        </Card>
    </Column>
</Row>

@*Examples with custom parameters for maps not in the IgnLayers enum*@ 
<Row Height="Height.Px(640)">
    <Column ColumnSize="ColumnSize.Is6">
        <Card Border="Border.Is2.Primary" Height="Height.Is100">
            <Map View="@view" Height="Height.Is100">
                <MapTileLayer Source="@GetIgnMap("ACCES.BIOMETHANE", ImageFormats.Png, TileMatrixSets.PM_6_16, "ACCES.BIOMETHANE")"
                              Attribution="© IGN"
                              Opacity="1.00"
                              ZIndex="0" />
            </Map>
        </Card>
    </Column>
    <Column ColumnSize="ColumnSize.Is6">
        <Card Border="Border.Is2.Primary" Height="Height.Is100">
            <Map View="@view" Height="Height.Is100">
                <MapTileLayer Source="@GetIgnMap("BESOIN.CHALEUR.INDUSTRIEL", ImageFormats.Png, TileMatrixSets.PM_6_18, "BESOIN.CHALEUR.INDUSTRIEL")"
                              Attribution="© IGN"
                              Opacity="1.00"
                              ZIndex="0" />
            </Map>
        </Card>
    </Column>
</Row>
```
This page contains two rows of maps, each with two columns. 
The first row shows a map with the IGN plan, cadastral parcels, hydrography and airports, and a map with aerial photos and airports.
The second row demonstrates how to use custom layers not defined in the `IgnLayers` enum.


## All together
The IgnMaps class :
```csharp
public class IgnMaps(HttpClient http)
{
    private readonly HttpClient _http = http ?? throw new ArgumentNullException(nameof(http));
    private readonly JsonSerializerOptions _jsonOptions = new() { PropertyNameCaseInsensitive = true };

    // DTOs 
    internal class GeoResponse
    {
        public Feature[]? Features { get; set; }
    }

    internal class Feature
    {
        public Geometry? Geometry { get; set; }
    }

    internal class Geometry
    {
        public double[]? Coordinates { get; set; }
    }
    /// <summary>
    /// Enum representing the different image formats available for map layers
    /// </summary>
    public enum ImageFormats
    {
        Png,
        Jpeg
    }

    /// <summary>
    /// Enum representing the different tile matrix sets available for map layers
    /// </summary>
    public enum TileMatrixSets
    {
        PM_0_10,
        PM_0_18,
        PM_0_19,
        PM_3_16,
        PM_3_17,
        PM_4_18,
        PM_6_14,
        PM_6_16,
        PM_6_17,
        PM_6_18,
        PM_7_17,
        PM_7_18
    }

    /// <summary>
    /// Enum representing the different IGN map layers available for use
    /// </summary>
    public enum IgnLayers
    {
        PlanIgn,
        PhotosAeriennes,
        ParcellesCadastrales,
        Hydrographie,
        CartesScan1000,
        Haies,
        HaiesLineraires,
        LimitesAdministratives,
        Routes,
        TransportsExceptionnels,
        Altitude,
        ForetsPubliques,
        Sols,
        Forets,
        RegistreParcellaireGraphique,
        CoursEau,
        CourbesNiveau,
        SeuilsPentesAgriculture,
        Aeroports
    }

    private const string IgnServiceUrl = "https://data.geopf.fr/wmts";
    private record IgnMapInfo(IgnLayers Layer, string LayerName, ImageFormats ImageFormat, TileMatrixSets TileMatrixSet, string Style = "normal");
    private static List<IgnMapInfo> IgnMapsList { get; } =
    [
        new(IgnLayers.PlanIgn,"GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2",ImageFormats.Png,TileMatrixSets.PM_0_19),
        new(IgnLayers.PhotosAeriennes,"ORTHOIMAGERY.ORTHOPHOTOS",ImageFormats.Jpeg,TileMatrixSets.PM_0_19),
        new(IgnLayers.ParcellesCadastrales,"CADASTRALPARCELS.PARCELLAIRE_EXPRESS",ImageFormats.Png,TileMatrixSets.PM_0_19),
        new(IgnLayers.Hydrographie,"HYDROGRAPHY.HYDROGRAPHY",ImageFormats.Png,TileMatrixSets.PM_6_18),
        new(IgnLayers.CartesScan1000,"IGNF_CARTES_SCAN-1000",ImageFormats.Jpeg,TileMatrixSets.PM_0_10, "SCAN1000"),
        new(IgnLayers.Haies,"IGNF_BD-HAIE-V1_2020",ImageFormats.Png,TileMatrixSets.PM_4_18),
        new(IgnLayers.LimitesAdministratives,"LIMITES_ADMINISTRATIVES_EXPRESS.LATEST",ImageFormats.Png,TileMatrixSets.PM_6_16),
        new(IgnLayers.Routes,"TRANSPORTNETWORKS.ROADS",ImageFormats.Png,TileMatrixSets.PM_6_18),
        new(IgnLayers.TransportsExceptionnels,"SECUROUTE.TE.1TE",ImageFormats.Png,TileMatrixSets.PM_7_17,"RESEAU ROUTIER 1TE"),
        new(IgnLayers.Altitude,"ELEVATION.SLOPES",ImageFormats.Jpeg,TileMatrixSets.PM_6_14),
        new(IgnLayers.ForetsPubliques,"FORETS.PUBLIQUES",ImageFormats.Png,TileMatrixSets.PM_3_16,"FORETS PUBLIQUES ONF"),
        new(IgnLayers.Sols,"INRA.CARTE.SOLS",ImageFormats.Png,TileMatrixSets.PM_6_16,"CARTE DES SOLS"),
        new(IgnLayers.Forets,"LANDCOVER.FORESTINVENTORY.V2",ImageFormats.Png,TileMatrixSets.PM_6_16),
        new(IgnLayers.RegistreParcellaireGraphique,"LANDUSE.AGRICULTURE.LATEST",ImageFormats.Png,TileMatrixSets.PM_6_16),
        new(IgnLayers.CoursEau,"HYDROGRAPHY.BCAE.2026",ImageFormats.Png,TileMatrixSets.PM_6_17),
        new(IgnLayers.HaiesLineraires,"hedge.hedge",ImageFormats.Png,TileMatrixSets.PM_7_18),
        new(IgnLayers.CourbesNiveau,"ELEVATION.CONTOUR.LINE",ImageFormats.Png,TileMatrixSets.PM_6_18),
        new(IgnLayers.SeuilsPentesAgriculture,"ELEVATION.ELEVATIONGRIDCOVERAGE.THRESHOLD",ImageFormats.Png,TileMatrixSets.PM_3_17, "ELEVATION.ELEVATIONGRIDCOVERAGE.THRESHOLD"),
        new(IgnLayers.Aeroports,"TRANSPORTNETWORKS.RUNWAYS",ImageFormats.Png,TileMatrixSets.PM_6_18)
    ];

    private static string GetIgnMapUrl(IgnMapInfo map) => $"{IgnServiceUrl}?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER={map.LayerName}&STYLE={map.Style}&FORMAT={(map.ImageFormat == ImageFormats.Png ? "image/png" : "image/jpeg")}&TILEMATRIXSET={map.TileMatrixSet}&TILEMATRIX={{z}}&TILEROW={{y}}&TILECOL={{x}}";

    /// <summary>
    /// Get the URL for the specified IGN map layer.
    /// </summary>
    /// <param name="layer">The IGN map layer.</param>
    /// <returns>The URL of the specified IGN map layer.</returns>
    /// <example>
    /// <code>
    /// var url = IgnMaps.GetIgnMap(IgnMaps.IgnLayers.PlanIgn);
    /// // Example output: https://data.geopf.fr/wmts?SERVICE=WMTS&amp;VERSION=1.0.0&amp;REQUEST=GetTile&amp;LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&amp;STYLE=normal&amp;FORMAT=image/png&amp;TILEMATRIXSET=PM_0_19&amp;TILEMATRIX={z}&amp;TILEROW={y}&amp;TILECOL={x}
    /// </code>
    /// </example>
    public static string GetIgnMap(IgnLayers layer)
    {
        return GetIgnMapUrl(IgnMapsList.FirstOrDefault(m => m.Layer == layer)!);
    }

    /// <summary>
    /// Builds a WMTS URL for the specified IGN layer using the provided parameters.
    /// </summary>
    /// <param name="layer">The layer name to request from the IGN WMTS service.</param>
    /// <param name="imageFormat">The image format to request for the tile.</param>
    /// <param name="tileMatrixSet">The tile matrix set used for the requested tiles.</param>
    /// <param name="style">The style to apply to the WMTS request. Defaults to <c>normal</c>.</param>
    /// <returns>A WMTS GetTile URL for the requested IGN layer.</returns>
    /// <example>
    /// <code>
    /// var url = IgnMaps.GetIgnMap(
    ///     "MY.LAYER",
    ///     IgnMaps.ImageFormats.Png,
    ///     IgnMaps.TileMatrixSets.PM_6_18,
    ///     "normal");
    /// </code>
    /// </example>
    public static string GetIgnMap(string layer, ImageFormats imageFormat, TileMatrixSets tileMatrixSet, string style = "normal")
    {
        return $"{IgnServiceUrl}?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER={layer}&STYLE={style}&FORMAT={(imageFormat == ImageFormats.Png ? "image/png" : "image/jpeg")}&TILEMATRIXSET={tileMatrixSet}&TILEMATRIX={{z}}&TILEROW={{y}}&TILECOL={{x}}";
    }

    /// <summary>
    /// Queries the API https://api-adresse.data.gouv.fr to retrieve up to <paramref name="maxResults"/>
    /// GPS coordinates (latitude, longitude) corresponding to the provided address.
    /// </summary>
    /// <param name="adresse">Free-form address or postal code to search for. If the provided value is a postal code (5 digits),
    /// the request uses the "municipality" type filter to improve results.</param>
    /// <param name="maxResults">Maximum number of coordinates to return. Must be strictly greater than 0.</param>
    /// <param name="ct">Optional cancellation token. The operation respects cancellation and throws <see cref="OperationCanceledException"/> if canceled.</param>
    /// <returns>
    /// A list of tuples (Latitude, Longitude) in decimal degrees (WGS84).
    /// The list is empty if no coordinates are found, if the HTTP request fails, or in case of an unhandled error.
    /// </returns>
    /// <remarks>
    /// - Uses the instance of <see cref="System.Net.Http.HttpClient"/> provided to the class constructor.
    /// - The method reads the response as a stream and deserializes the JSON using <see cref="System.Text.Json.JsonSerializer"/>.
    /// - Cancellation is frequently checked to allow for quick interruption.
    /// </remarks>
    /// <exception cref="OperationCanceledException">If <paramref name="ct"/> is canceled during the operation.</exception>
    public async Task<List<(double Latitude, double Longitude)>> GetCoordinatesFromAddressAsync(string adresse, int maxResults = 5, CancellationToken ct = default)
    {
        if (string.IsNullOrWhiteSpace(adresse) || maxResults <= 0)
        {
            return new List<(double Latitude, double Longitude)>();
        }

        ct.ThrowIfCancellationRequested();

        var trimmed = adresse.Trim().ToUpperInvariant();
        bool isPostalCode = trimmed.Length == 5 && trimmed.All(char.IsDigit);
        var relative = isPostalCode
            ? $"search/?q={Uri.EscapeDataString(trimmed)}&type=municipality"
            : $"search/?q={Uri.EscapeDataString(trimmed)}";

        using var response = await _http.GetAsync(relative, HttpCompletionOption.ResponseHeadersRead, ct).ConfigureAwait(false);

        if (!response.IsSuccessStatusCode)
        {
            return new List<(double Latitude, double Longitude)>();
        }

        ct.ThrowIfCancellationRequested();
        using var stream = await response.Content.ReadAsStreamAsync(ct).ConfigureAwait(false);
        ct.ThrowIfCancellationRequested();

        var geo = await JsonSerializer.DeserializeAsync<GeoResponse?>(stream, _jsonOptions, ct).ConfigureAwait(false);

        var result = new List<(double Latitude, double Longitude)>();

        if (geo?.Features is { Length: > 0 } features)
        {
            foreach (var f in features)
            {
                ct.ThrowIfCancellationRequested();
                var coords = f?.Geometry?.Coordinates;
                if (coords is { Length: >= 2 })
                {
                    // Retour de l'API : [longitude, latitude], Blazorise.MapCoordinate attend (latitude, longitude)
                    result.Add((Latitude: coords[1], Longitude: coords[0]));

                    if (result.Count >= maxResults)
                    {
                        break;
                    }
                }
            }
        }

        return result;
    }
}

public static class IgnMapsServiceCollectionExtensions
{
    /// <summary>
    /// Record IgnMaps as typed HttpClient with default configuration for the IGN Maps API. Optionally allows further configuration of the HttpClient.
    /// </summary>
    public static IServiceCollection AddIgnMaps(this IServiceCollection services, Action<HttpClient>? configureClient = null)
    {
        services.AddHttpClient<IgnMaps>(client =>
        {
            client.BaseAddress = new Uri("https://api-adresse.data.gouv.fr/");
            client.Timeout = TimeSpan.FromSeconds(10);
            configureClient?.Invoke(client);
        });

        return services;
    }
}
```
In Program.cs, register the IgnMaps service in the DI container:
```csharp
builder.Services.AddIgnMaps();
```
And then the Blazor page :
```razor
@using static Cge.Blazorise.IgnMaps;
@page "/carte"

<PageTitle>Carte</PageTitle>

<Row Height="Height.Px(640)">
    <Column ColumnSize="ColumnSize.Is6">
        <Card Border="Border.Is2.Primary" Height="Height.Is100">
            <Map View="@view" Height="Height.Is100">
                <MapTileLayer Source="@GetIgnMap(IgnLayers.PlanIgn)"
                              Attribution="© IGN"
                              Opacity="1"
                              ZIndex="0" />
                <MapTileLayer Source="@GetIgnMap(IgnLayers.ParcellesCadastrales)"
                              Attribution="© IGN"
                              Opacity="0.85"
                              ZIndex="10" />
                <MapTileLayer Source="@GetIgnMap(IgnLayers.CoursEau)"
                              Attribution="© IGN"
                              Opacity="0.85"
                              ZIndex="20"/>
                <MapTileLayer Source="@GetIgnMap(IgnLayers.Aeroports)"
                              Attribution="© IGN"
                              Opacity="0.85"
                              ZIndex="30" />
            </Map>
        </Card>
    </Column>
    <Column ColumnSize="ColumnSize.Is6">
        <Card Border="Border.Is2.Primary" Height="Height.Is100">
            <Map View="@view" Height="Height.Is100">
                <MapTileLayer Source="@GetIgnMap(IgnLayers.PhotosAeriennes)"
                              Attribution="© IGN"
                              Opacity="1.00"
                              ZIndex="0" />
                <MapTileLayer Source="@GetIgnMap(IgnLayers.Aeroports)"
                              Attribution="© IGN"
                              Opacity="0.85"
                              ZIndex="10" />
            </Map>
        </Card>
    </Column>
</Row>

@*Examples with custom parameters for maps not in the IgnLayers enum*@ 
<Row Height="Height.Px(640)">
    <Column ColumnSize="ColumnSize.Is6">
        <Card Border="Border.Is2.Primary" Height="Height.Is100">
            <Map View="@view" Height="Height.Is100">
                <MapTileLayer Source="@GetIgnMap("ACCES.BIOMETHANE", ImageFormats.Png, TileMatrixSets.PM_6_16, "ACCES.BIOMETHANE")"
                              Attribution="© IGN"
                              Opacity="1.00"
                              ZIndex="0" />
            </Map>
        </Card>
    </Column>
    <Column ColumnSize="ColumnSize.Is6">
        <Card Border="Border.Is2.Primary" Height="Height.Is100">
            <Map View="@view" Height="Height.Is100">
                <MapTileLayer Source="@GetIgnMap("BESOIN.CHALEUR.INDUSTRIEL", ImageFormats.Png, TileMatrixSets.PM_6_18, "BESOIN.CHALEUR.INDUSTRIEL")"
                              Attribution="© IGN"
                              Opacity="1.00"
                              ZIndex="0" />
            </Map>
        </Card>
    </Column>
</Row>
```


## Final notice
It's important to note that the IGN service has usage limits and may require an API key for higher request volumes. Always check the IGN documentation for the latest information on usage policies and authentication requirements.
