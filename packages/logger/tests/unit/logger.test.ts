import * as Logger from "../../src";

describe("logger", () => {
  beforeEach(() => {
    jest.spyOn(global.console, "info").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
    global.logger = undefined;
  });

  describe("log()", () => {
    test("instantiates Logger", async () => {
      expect.hasAssertions();

      const spy = jest.spyOn(Logger, "Logger");

      expect(global.logger).toBeUndefined();

      Logger.log("test");

      expect(spy).toHaveBeenCalled();
      expect(global.logger).toBeDefined();
    });

    test("uses fallback log method if level not supported", async () => {
      expect.hasAssertions();

      const spy = jest.spyOn(global.console, "info");

      Logger.log("test", "success");

      expect(spy).toHaveBeenCalledWith("test");
    });
  });

  describe("Logger()", () => {
    test("returns a NodeJS.console object is no module passed", async () => {
      expect.hasAssertions();

      const spy = jest.spyOn(global.console, "info").mockImplementation(() => {
        return "Mocked Console";
      });

      Logger.log("test");

      expect(spy).toHaveLastReturnedWith("Mocked Console");
      expect(global.logger).toBeDefined();
    });

    test.each([[undefined], [""]])(
      "returns a NodeJS.console object is module is '%s'",
      async (moduleName) => {
        expect.hasAssertions();

        const spy = jest
          .spyOn(global.console, "info")
          .mockImplementation(() => {
            return "Mocked Console";
          });

        Logger.Logger(moduleName);
        Logger.log("test");

        expect(spy).toHaveBeenCalledWith("test");
        expect(spy).toHaveLastReturnedWith("Mocked Console");
        expect(global.logger).toBeDefined();
      },
    );

    test("instantiates a logger", () => {
      expect.hasAssertions();

      Logger.Logger();

      expect(global.logger?.instance).toEqual(
        expect.objectContaining({
          debug: expect.any(Function),
          error: expect.any(Function),
          info: expect.any(Function),
          log: expect.any(Function),
          warn: expect.any(Function),
        }),
      );
    });

    test("returns module passed", () => {
      expect.hasAssertions();

      Logger.Logger(require.resolve("../__data__/dummy_logger"));

      expect(global.logger).toBeDefined();
      expect(global.logger?.instance).toEqual(
        expect.objectContaining({
          info: expect.any(Function),
        }),
      );
    });

    test("overrides current logger", async () => {
      expect.hasAssertions();

      const spyConsole = jest
        .spyOn(global.console, "info")
        .mockImplementation(() => {
          return "Mocked Console";
        });

      Logger.Logger();
      expect(global.logger).toBeDefined();

      Logger.Logger(require.resolve("../__data__/dummy_logger"));

      const spyLogger = jest.spyOn(global.logger!, "_log");

      Logger.log("test");

      expect(spyConsole).not.toHaveBeenCalled();
      expect(spyLogger).toHaveBeenCalledWith("test", "info");
    });
  });
});
